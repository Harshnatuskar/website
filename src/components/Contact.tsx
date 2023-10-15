 /*
interface ContactButtonProps {
  onTap: OnTapFunction;
}

function ContactButton({ onTap }: ContactButtonProps) {
  const [tooltipText, setTooltipText] = useState('Email');

  const handleClick = () => {
    onTap();
    setTooltipText('Copied!');
    setTimeout(() => setTooltipText('Email'), 2000); // Reset tooltip after 2 seconds
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className='mx-auto text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-black dark:bg-slate-300 dark:text-black drop-shadow-md relative overflow-hidden'
    >
      {tooltipText}
    </button>
  );
}

const ContactButtonWithoutToast: WithoutToastFunction = withoutToast(ContactButton);

export default ContactButtonWithoutToast;

*/
