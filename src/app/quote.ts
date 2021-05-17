export class Quote {

    constructor(
        public id: number,
        public name: string,
        public words: string,
        public author: string,
        public completeDate: Date,
        public upvote: number,
        public downvote: number) {

    }
}