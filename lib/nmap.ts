import run from './run';

export default class Nmap {
    private args: string[] = [];

    run() {
        const args = this.args.join(" ");
        return run(args); 
    }


}