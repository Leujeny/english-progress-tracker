'use client'

import Collapse from "@/components/atoms/collapse";
import InputRange from "@/components/atoms/input/inputRange";
import InputSelect from "@/components/atoms/input/inputSelect";
import InputText from "@/components/atoms/input/inputText";
import InputTextarea from "@/components/atoms/input/inputTextarea";
import AddRessourceForm from "@/components/organisms/form/addSessionForm";
import { DIFFICULTY_OPTION } from "@/constants/selectionOption";
import { useLocalStorage } from "@/hook/useLocalStorage";
import { transformerRessourcesEnOptions } from "@/utils/resourceUtils";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UpdateSession() {
  const { session_id } = useParams();
  const router = useRouter();
  const [sessions, setSessions] = useLocalStorage<Session[]>("sessions", []);
  const [ressources, setRessources] = useLocalStorage<Ressource[]>("ressources", []);
  const [session, setSession] = useState<Session>();

  const listeOptions: Option[] = transformerRessourcesEnOptions(ressources);

  const [date, setDate] = useState<string>('');
  const [episode, setEpisode] = useState<string>('');
  const [duration, setDuration] = useState<number>(15);
  const [note, setNote] = useState<string>('');
  const [podcast, setPodcast] = useState<string>('');
  const [vocabulary, setVocabulary] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswser] = useState<string>('');
  const [understanding, setUnderstanding] = useState<string>('');
  const [difficulty, setDifficulty] = useState<string>('');

  const getUserById = (id: number) => {
    return sessions.find(res => res.id === id);
  };

  useEffect(() => {
    if (typeof session_id === 'string') {
      setSession(getUserById(parseInt(session_id)));
    }
  }, [sessions]);

  useEffect(() => {
    if (session?.id) {
      setDate(session.date);
      if (session.episode) { setEpisode(session.episode); }
      if (session.duration) { setDuration(session.duration); }
      if (session.note) { setNote(session.note) }
      if (session.podcast) { setPodcast(session.podcast) }
      if (session.vocabulary) { setVocabulary(session.vocabulary) }
      if (session.text) { setText(session.text); }
      if (session.question) {
        setQuestion(session.question.question)
        setAnswser(session.question.answer);
      }
      if (session.grade) {
        setUnderstanding((session.grade).toString())
      }
      if (session.difficulty) {
        setDifficulty(session.difficulty)
      }

    }
  }, [session]);

  const addSession = () => {
    if (session?.id) {
      const updatedSession: Session = {
        id: session.id,
        type: 'podcast',
        podcast: podcast,
        date: date,
        episode: episode,
        duration: duration,
        note: note,
        vocabulary: vocabulary,
        text: text,
        question: { question: question, answer: answer },
        grade: parseInt(understanding),
        difficulty: difficulty

      };
      const updatedSessions = sessions.map(s =>
        s.id === session.id ? updatedSession : s
      );

      setSessions(updatedSessions);
      router.back()
      // router.push(`/session/${id}/update`);
    }


  };


  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Update the ressource</h2>
        <Collapse title={"Basics"}>
          <AddRessourceForm
            date={date} setDate={setDate}
            episode={episode} setEpisode={setEpisode}
            duration={duration} setDuration={setDuration}
            note={note} setNote={setNote}
            podcast={podcast} setPodcast={setPodcast}
            listeOptions={listeOptions}
          />
        </Collapse>
        <Collapse title={"Main"}>
          <InputTextarea label={"vocabulary"} value={vocabulary} setValue={setVocabulary} />
          <InputTextarea label={"the text"} value={text} setValue={setText} />
          <div className="divider mx-auto w-4/5" />
          <InputText label={"Question"} value={question} setValue={setQuestion} />
          <InputTextarea label={"Answer"} value={answer} setValue={setAnswser} />
        </Collapse>
        <Collapse title={"Evaluation"}>
          <InputSelect options={DIFFICULTY_OPTION} value={difficulty} setValue={setDifficulty} label={"Difficulty"} />
          <InputRange label={"Understanding"} value={understanding} setValue={setUnderstanding} />
        </Collapse>
        <button onClick={addSession} className="btn btn-primary rounded-sm me-4  mt-4 w-36">Update</button>
      </div>
    </div>
  );
}
