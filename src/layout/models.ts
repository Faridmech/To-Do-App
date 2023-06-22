import { Dispatch, SetStateAction} from "react"

export type TSetInput = {setInputText: React.Dispatch<React.SetStateAction<string>>};

export type State = {value: string; setInputText: Dispatch<SetStateAction<string>>;} 