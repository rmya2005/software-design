import  ILogger  from './ILogger';
import ConsoleLogger  from './ConsoleLogger';
import { FileWriter } from './FileWriter';
import { FileLoggerAdapter } from './FileLoggerAdapter';

function main() {
    const consoleLogger: ILogger = new ConsoleLogger();
    
    console.log("Testing Console Logger:");
    consoleLogger.Log("This is an information message");
    consoleLogger.Error("This is an error message");
    consoleLogger.Warn("This is a warning message");
    
    console.log("\n");
    
    const fileWriter = new FileWriter('log.txt');
    const fileLogger: ILogger = new FileLoggerAdapter(fileWriter);
    
    console.log("Testing File Logger (check log.txt file):");
    fileLogger.Log("This is an information message saved to file");
    fileLogger.Error("This is an error message saved to file");
    fileLogger.Warn("This is a warning message saved to file");
}

main();