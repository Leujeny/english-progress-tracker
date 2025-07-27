
interface Props {
  grade: number,
}

export default function GradeAvatar({ grade }: Props) {
  let label = '';

  if (grade < 200) {
    label = 'A1'
  } else if (grade < 300) {
    label = 'A2'
  }
  else if (grade < 400) {
    label = 'B1'
  }
  else if (grade < 500) {
    label = 'B2'
  }
  else if (grade < 599) {
    label = 'C1'
  }
  else {
    label = 'C2'
  }

  return (
    <div className="avatar avatar-placeholder">
      <div className="bg-primary text-neutral-content w-12 rounded-full">
        <span className="text-xl text-white">{label}</span>
      </div>
    </div>
  );

}
