import { Telefone } from "./telefone";

export class Usuario {
    public id: number = 0;
    public userLogin: string = '';
    public userNome: string = '';
    public userCpf: string = '';
    public userTelefones: Telefone[] = [];
}
