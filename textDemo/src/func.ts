export function reverse(s: string): string {
    return s.split("").reverse().join("");
}

export function revbtn(): void {

    const in1: HTMLInputElement = document.getElementById("in1") as HTMLInputElement;
    const ou1: HTMLDivElement = document.getElementById("ou1") as HTMLDivElement;
    const s: string = in1.value;
    ou1.innerText = reverse(s);
}

export function clrbtn(): void {
    const in1: HTMLInputElement = document.getElementById("in1") as HTMLInputElement;
    const ou1: HTMLDivElement = document.getElementById("ou1") as HTMLDivElement;
    in1.value = "";
    in1.innerText = "";
    ou1.innerText = "";
}

// if there is no export, the function is not visible outside this file
//  (window as any).revbtn = revbtn; // similar to globalThis.revbtn = revbtn;
//  (window as any).clrbtn = clrbtn; // similar to globalThis.clrbtn = clrbtn;
// unless you set webpack.config.js to expose the function to library:"yourlibName",  libraryTarget: "var"
