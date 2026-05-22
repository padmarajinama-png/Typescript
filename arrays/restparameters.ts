export function formatLabels(...labels: string[]) {
    if (labels.length === 0) {
        return "No Labels";
    }

    if (labels.length === 1) {
        return `Label: ${labels[0]}`;
    }

    return `Labels: ${labels.join(", ")}`;
}

console.log(formatLabels());
console.log(formatLabels("HTML"));
console.log(formatLabels("HTML", "CSS", "JavaScript"));