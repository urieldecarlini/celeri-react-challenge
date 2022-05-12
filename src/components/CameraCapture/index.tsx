import { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useTranslator } from '../../hooks/useTranslator';
import useStyles from './styles';

const WebcamCapture = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const webcamRef = useRef<Webcam>(null);
  const { height, width } = useWindowDimensions();
  const [imgSrc, setImgSrc] = useState<string | null | undefined>('');
  const [showImage, setShowImage] = useState(false);
  const continueText = useTranslator('tid_next');
  const retakeText = useTranslator('tid_retake');
  const captureText = useTranslator('tid_capture');
  const videoConstraints = {
    width: 320,
    height: 450,
    facingMode: 'user'
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setImgSrc(imageSrc);
    setShowImage(true);
  }, [webcamRef, setImgSrc]);

  const retake = useCallback(() => {
    setShowImage(false);
  }, [setShowImage]);

  const submitImage = useCallback(() => {
    console.log('SUBMIT IMAGE', imgSrc);
    navigate('/proof-of-identity', { state: { front: imgSrc } });
  }, [imgSrc]);

  return (
    <>
      {showImage && imgSrc ? (
        <>
          <img src={imgSrc} className={classes.image} />
          <div className={classes.buttonContainer}>
            <Button
              className={classes.buttonRetake}
              variant="contained"
              onClick={retake}
            >
              {retakeText}
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              onClick={submitImage}
            >
              {continueText}
            </Button>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'black',
              height: height * 0.85
            }}
          >
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'lightcoral'
            }}
          >
            <Button
              className={classes.button}
              variant="contained"
              onClick={capture}
            >
              {captureText}
            </Button>
          </div>
        </>
      )}
    </>
  );
};
export default WebcamCapture;
