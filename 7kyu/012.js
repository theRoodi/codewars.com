


function membershipCategories(members) {
    return members.map((member) => {
        let [age, handicap] = member;


        if (age >= 55 && handicap > 7) {
            return "Senior";
        } else {
            return "Open";
        }
    });
}

let members = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]];
console.log(membershipCategories(members)); // Output: ["Open", "Open", "Senior", "Open", "Open", "Senior"]