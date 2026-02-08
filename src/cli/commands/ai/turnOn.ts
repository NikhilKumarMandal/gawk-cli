import chalk from "chalk";
import { Command } from "commander";
import { select } from "@clack/prompts";
import { PlanMode } from "../../chat/plan-mode";
import { ReviewMode } from "../../chat/review-mode";



const wakeUpAction = async () => {
   
     console.log(chalk.green(`\nHello 👋🏽!\n`));

    const choice = await select({
        message: "Select an option:",
        options: [
            {
                value: "Plan Mode",
                label: "Plan",
                hint: "Direct, step-by-step implementation for single-PR tasks",
            },
            {
                value: "Review Mode",
                label: "Review",
                hint: "Agentic code review with thorough exploration and analysis.",
            },
            {
                value: "Phases Mode",
                label: "Phases",
                hint: "Structured, multi-phase development for complex projects. Break goals into iterative phases with validation between steps.",
            },
        ],
    });

    switch (choice) {
        case "Plan Mode":
            await PlanMode();
            break;
        case "Review Mode":
            await ReviewMode();
            break;
        // case "Phases Mode":
        //     await PhasesMode();
        //     break;
    }
};

export const turnOn = new Command("turnon")
    .description("Wake up the AI")
    .action(wakeUpAction);