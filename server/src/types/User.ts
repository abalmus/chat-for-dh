export interface UserSettingsI {
    interfaceColor: string;
    timeFormat: string;
    submitShortcut: boolean;
}

export default interface UserI {
    id: string | null;
    userName: string;
    settings: UserSettingsI;
}
