const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BACKLOG_PATH = path.join(__dirname, '../docs/feature-backlog.md');

function getNextFeature() {
    const content = fs.readFileSync(BACKLOG_PATH, 'utf8');
    const match = content.match(/\d+\.\s+\*\*(.+?)\*\*:\s+(.+)/);
    
    if (!match) {
        console.log("No more features in the backlog!");
        process.exit(0);
    }

    return {
        title: match[1],
        description: match[2],
        fullText: match[0]
    };
}

function markFeatureAsDone(feature) {
    let content = fs.readFileSync(BACKLOG_PATH, 'utf8');
    
    // Remove from queue
    content = content.replace(feature.fullText + '\n', '');
    
    // Add to Done section
    const doneMarker = '## ✅ Done';
    const doneEntry = `\n- [x] ${feature.title}`;
    content = content.replace(doneMarker, doneMarker + doneEntry);
    
    fs.writeFileSync(BACKLOG_PATH, content);
}

const feature = getNextFeature();
console.log(`🚀 Starting rollout for: ${feature.title}`);

try {
    // Invoke Gemini CLI to implement the feature
    // We use the specialized skills in the prompt
    const prompt = `
    TASK: Implement the following feature for the Bucharest School Search app.
    FEATURE: ${feature.title}
    DESCRIPTION: ${feature.description}
    
    REQUIREMENTS:
    1. Use the 'software-design-architect' skill for domain context.
    2. Use the 'clean-code-engineer' skill for implementation standards.
    3. Use the 'code-reviewer' skill to self-review the changes.
    4. Use the 'automated-tester' skill to add a Playwright E2E test for this feature.
    
    Once finished, provide a summary of the changes.
    `;

    // Note: In a real GitHub Action, we would run: 
    // gemini "${prompt}"
    // For now, we simulate the logic of moving the backlog
    
    console.log("🚀 Invoking Gemini CLI to implement the feature...");
    
    // Execute the Gemini CLI
    // We pass the prompt to the gemini command
    execSync(`gemini "${prompt.replace(/"/g, '\\"')}"`, { stdio: 'inherit' });
    
    console.log("✅ Feature implementation complete.");
    
    markFeatureAsDone(feature); 
    
} catch (error) {
    console.error(`❌ Rollout failed: ${error.message}`);
    process.exit(1);
}
