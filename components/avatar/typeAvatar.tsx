import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faCirclePlay, faCircleQuestion, faPodcast } from '@fortawesome/free-solid-svg-icons'

interface Props {
  type: string,
}

export default function TypeAvatar({ type }: Props) {

  let icon;

  switch (type) {
    case 'podcast':
      icon = faPodcast;
      break;
    case 'video':
      icon = faCirclePlay;
      break;
    case 'text':
      icon = faBookOpen;
      break;
    default:
      icon = faCircleQuestion;
  }

  return (
    <div className="avatar">
      <div className="bg-primary rounded-full p-2 flex items-center justify-center">
        {icon && <FontAwesomeIcon icon={icon} className="text-white text-xl m-2 w-5" />}
      </div>
    </div>
  );
}
