export default interface MessageI {
    time: Date;
    userName: string;
    text: string;
    isSelf?: boolean;
}