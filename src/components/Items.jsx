import { useContext } from 'react';
import { NiceFlagContext } from '../store/NiceFlagProvider';
import NiceImage from '../assets/img/items/nice.svg';
import NiceDisableImage from '../assets/img/items/nice_disable.svg';

export const Nice = () => {
  const { isNice, setIsNice } = useContext(NiceFlagContext);
  const onClickSwitch = () => setIsNice(!isNice);

  return (
    <>
      {isNice ? (
        <>
          <button onClick={onClickSwitch}>
            <img src={NiceImage} alt="enable" />
          </button>
        </>
      ) : (
        <>
          <button onClick={onClickSwitch}>
            <img src={NiceDisableImage} alt="disable" />
          </button>
        </>
      )}
      <style>{`
        button {
          border: none;
          background: none;
        }
      `}</style>
    </>
  );
};
