export interface UserSettingsI {
    interfaceColor: string;
    timeFormat: string;
    submitShortcut: boolean;
}

export default interface UserI {
    id: number | null;
    userName: string;
    settings: UserSettingsI;
}
