import Button from '@/components/ui/button';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { useTranslation } from 'next-i18next';

export default function JoinButton() {
  const { t } = useTranslation('common');
  const { openModal } = useModalAction();
  function handleJoin() {
    return openModal('LOGIN_VIEW');
  }
  return (
    <Button className="font-thin text-indigo-950 bg-teal-400 hover:text-white hover:bg-teal-500" size="small" onClick={handleJoin}>
      {t('join-button')}
    </Button>
  );
}
