import { api } from "@/lib/axios";
import { Wand2 } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Separator } from "./ui/separator";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";

interface Prompt {
  id: string;
  title: string;
  template: string;
}

interface PromptProps {
  onPromptSelected: (template: string) => void;
  // onTemperature: (temperature: number) => void;
  // onFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
  // isLoading: boolean;
}

export default function PromptSelect(props: PromptProps) {
  const [prompts, setPrompts] = useState<Prompt[] | null>(null);
  const [temperature, setTemperature] = useState(0.5);

  // const {
  //   input,
  //   setInput,
  //   handleInputChange,
  //   handleSubmit,
  //   completion,
  //   isLoading,
  // } = useCompletion({
  //   api: "http://localhost:3333/ai/complete",
  //   body: {
  //     videoId,
  //     temperature,
  //   },
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  // });

  useEffect(() => {
    api.get("/prompts").then((response) => {
      setPrompts(response.data);
    });
  }, []);

  function handlePromptSelected(promptId: string) {
    const selectedPrompt = prompts?.find((prompt) => prompt.id === promptId);

    if (!selectedPrompt) return;

    props.onPromptSelected(selectedPrompt.template);
  }

  return (
    <Select onValueChange={handlePromptSelected}>
      <SelectTrigger>
        <SelectValue placeholder="Selecione um prompt..." />
      </SelectTrigger>
      <SelectContent>
        {prompts?.map((prompt) => {
          return (
            <SelectItem key={prompt.id} value={prompt.id}>
              {prompt.title}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
