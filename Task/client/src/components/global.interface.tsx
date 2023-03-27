export interface InputParam{
    handleChange : (e : React.ChangeEvent<HTMLInputElement>) => void,
    value : string;
    labelText : string;
    labelFor : string;
    id : string;
    name : string;
    type : string;
    isRequired : boolean,
    placeholder :string,
    customClass? : string
}