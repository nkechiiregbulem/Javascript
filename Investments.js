Investments = ["XRP", "KIN", "ADA", "ZRX","NYC", "IOTA", "TRX"]

XRP_Price = .56
KIN_Price = .000065
ADA_Price = .08
ZRX_Price = .64
NYC_Price = .000031
IOTA_Price = 0.56
TRX_Price = 0.02

XRP = 1500
KIN = 70000
ADA = 1178
ZRX = 30
NYC = 1605000
IOTA = 100
TRX  = 1000000

EOY_XRP = 600
EOY_KIN = 0.02
EOY_ADA = 5
EOY_ZRX = 4
EOY_NYC = 0.03
EOY_IOTA = 6
E0Y_TRX = .50

congrats = "Congratulations Nkechi! Your investment in"
unfortuately = "Unfortunately"
InvestmentGoals = ["millionare", "$1000", "$5000", "$100", "$40,000", "$500" , "$500K"]
amount_of = "the amount of"

if (EOY_XRP > 600) {
    console.log(congrats + Investments[0] + " made you a " + InvestmentGoals[0] + ".");
} else {
    console.log("Unfortunately Nkechi, you are not a " + InvestmentGoals[0]+ " yet.");
}

while (XRP * EOY_XRP < 10000000) {
    console.log(unfortuately + amount_of + Investments[0] + " you have did not make you a " + InvestmentGoals[0] + ".");
}

if (EOY_KIN > 0.01) {
    console.log(congrats + Investments[1] + " made you over " + InvestmentGoals[1] + "." );
} else { 
    console.log("You did not make " + InvestmentGoals[1] + "in your " + Investments[1] + "Investment.");
}

while (KIN * EOY_KIN < 1000) {
    console.log("The amount of " + Investment[1] + " you had was not enough to make you over " + InvestmentGoals[1] + "." );
}

if (EOY_ADA > 5) {
    console.log(congrats + Investments[2] + " made you over " + InvestmentGoals[2] + "." );
} else {
    console.log(unfortuately + "The amount of " + Investment[2] + " you had was not enough to make you over " + InvestmentGoals[2] + ".");
}

while (ADA * EOY_ADA < 5000) {
    console.log(unfortuately + amount_of + investments[2] + " you had was not enough to make you over " + InvestmentGoals[2] );
}