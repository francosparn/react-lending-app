export function calculateTotal(amount, term){
    // 0 a 10000 = 25%
    // 10001 a 50000 = 20%
    // 50001 a 100000 = 15%
    // +100000 = 10%

    let totalAmount;

    if(amount <= 10000){
        totalAmount = amount * 0.25;
    }else if(amount > 10000 && amount <= 50000){
        totalAmount = amount * 0.20;
    }else if(amount > 50000 && amount <= 100000){
        totalAmount = amount * 0.15;
    }else{
        totalAmount = amount * 0.10;
    }

    // Calculate the term
    // 3 months = 5%
    // 6 months = 10%
    // 12 months = 15%
    // 24 months = 20%
    // 48 months = 30%

    let totalTerm = 0;

    switch(term){
        case 3:
            totalTerm = amount * 0.05;
            break;
        case 6:
            totalTerm = amount * 0.10;
            break;
        case 12:
            totalTerm = amount * 0.15;
            break;
        case 24:
            totalTerm = amount * 0.20;
            break;
        case 36:
            totalTerm = amount * 0.30;
            break;
        default:
            break;
    }

    return totalTerm + totalAmount + amount;
    
}

