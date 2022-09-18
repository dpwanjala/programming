// print hello 10 times
function print_hello_10() {
    const result = [];
    // for takes 3 inputs: initialExpression, conditionExpression/will continue as long as this is true, incrementExpression
    for (let step = 0; step < 10; step++) {
        result.push("hello")
    }
    return result;
}

const result = print_hello_10()
console.log(`Results: ${result}`)