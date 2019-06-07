import run from './run';

export enum ScanType {
    LIST_SCAN = '-sL',
    NO_PORT_SCAN = '-sn',
}

export interface NmapOptions {
    target: string;
    scanType: ScanType
}

export default class Nmap {
    private args: string[] = [];

    constructor(options: NmapOptions) {

    }

    run() {
        const args = this.args.join(" ");
        return run(args); 
    }


}