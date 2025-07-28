'use client'

import { useLocalStorage } from "@/hook/useLocalStorage";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import TitleBlocSession from "@/components/organisms/titleBlocSession";
import StatsListSession from "@/components/organisms/statsListSession";

export default function ViewSession() {
  const { session_id } = useParams();
  const [sessions, setSessions] = useLocalStorage<Session[]>("sessions", []);
  const [session, setSession] = useState<Session>();

  const getUserById = (id: number) => {
    return sessions.find(res => res.id === id);
  };

  useEffect(() => {
    if (typeof session_id === 'string') {
      setSession(getUserById(parseInt(session_id)));
    }
  }, [sessions]);

  return (
    <>
      <TitleBlocSession session={session} setSessions={setSessions} />
      {session && (
        <StatsListSession session={session} />
      )}
      <h2 className="card-title p-3">Vocabulary</h2>
      <div className="card">
        <div className="card-body">
          <p>{session?.vocabulary}</p>
        </div>
      </div>
      <h2 className="card-title p-3">Texts</h2>
      <div className="card">
        <div className="card-body">
          <p>{session?.text}</p>
        </div>
      </div>
      <h2 className="card-title p-3">Question</h2>
      <div className="card">
        <div className="card-body">
          <p className="underline">{session?.question?.question}</p>
          <p>{session?.question?.answer}</p>
        </div>
      </div>
    </>
  );
}
