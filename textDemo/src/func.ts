function reverse(s: string): string {
    return s.split("").reverse().join("");
}

function revbtn(): void {

    const in1: HTMLInputElement = document.getElementById("in1") as HTMLInputElement;
    const ou1: HTMLDivElement = document.getElementById("ou1") as HTMLDivElement;
    const s: string = in1.value;
    ou1.innerText = reverse(s);
}

function clrbtn(): void {
    const in1: HTMLInputElement = document.getElementById("in1") as HTMLInputElement;
    const ou1: HTMLDivElement = document.getElementById("ou1") as HTMLDivElement;
    in1.value = "";
    in1.innerText = "";
    ou1.innerText = "";
}

(window as any).revbtn = revbtn; // similar to globalThis.revbtn = revbtn;
(window as any).clrbtn = clrbtn; // similar to globalThis.clrbtn = clrbtn;