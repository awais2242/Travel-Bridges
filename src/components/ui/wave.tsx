import SectionBlock from './section-block';
import waveTop from '@/assets/images/wave-top.png';
import waveMid from '@/assets/images/wave-mid.png';
import waveBottom from '@/assets/images/wave-bot.png';

const WaveForm = () => {
  return (
        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner  top">
            <div
              className="wave waveTop"
              style={{
                backgroundImage:
                  'url(https://blog.stackfindover.com/wp-content/uploads/2020/11/wave-top.png) ',
              }}
            ></div>
          </div>
          <div className="waveWrapperInner mid">
            <div
              className="wave waveMid"
              style={{
                backgroundImage:
                  'url(https://blog.stackfindover.com/wp-content/uploads/2020/11/wave-mid.png) ',
              }}
            ></div>
          </div>
          <div className="waveWrapperInner bottom">
            <div
              className="wave waveBottom"
              style={{
                backgroundImage:
                  ' url(https://blog.stackfindover.com/wp-content/uploads/2020/11/wave-bot.png) ',
              }}
            ></div>
          </div>
        </div>

  );
};
export default WaveForm;
