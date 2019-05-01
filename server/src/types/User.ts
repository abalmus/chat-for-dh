export interface UserSettingsI {
    interfaceColor: string;
    timeFormat: string;
    ctrlEnter: string;
    language: string;
}

export default interface UserI {
    id: string | null;
    userName: string;
    settings: UserSettingsI;
}
