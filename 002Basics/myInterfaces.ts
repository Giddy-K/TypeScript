interface User {
    readonly _id: number,
    email: string,
    userId: number,
    googleId?: string,
    //startTrial: () => string,
    startTrial(): string,//Method to return a stirng
    getCoupon(couponName: string, value: number): number,
}

const SuperUser: User = {
    _id: 1323,
    email: "h@h.com",
    userId: 12313,
    startTrial: () => {
        return 'started';
    },
    getCoupon: (couponName: "hitesh10", value: 10) => {
        return 10;
    },
};

SuperUser.email = "superuser@gmail.com";
//SuperUser._id = 33 //Cannot assign read-only properties