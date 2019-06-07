import { promisify } from 'util';
import { exec } from 'child_process'

const execute = promisify(exec);

export default async function run(command: string) {
    try {
        const { stdout, stderr } = await execute(command);
        if (stderr) {
            return stderr;
        }

        return stdout;
    } catch (err) {
        return err.stdout;
    }
}
