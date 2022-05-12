import { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import useStyles from './styles';
import { useTranslator } from '../../../../hooks/useTranslator';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';

interface IDocumentPhoto {
  front: string;
  back: string;
  selfie: string;
}

const initialPersonDocumentFiles: IDocumentPhoto = {
  front: '',
  back: '',
  selfie: ''
};
const CapturePhoto = () => {
  const { height } = useWindowDimensions();
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const paramState = state as IDocumentPhoto;
  const webcamRef = useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = useState<string | null | undefined>('');
  const [showImage, setShowImage] = useState(false);
  const [filesUpload, setFilesUpload] = useState<IDocumentPhoto>(
    initialPersonDocumentFiles
  );
  const continueText = useTranslator('tid_next');
  const retakeText = useTranslator('tid_retake');
  const captureText = useTranslator('tid_capture');
  const videoConstraints = {
    width: 320,
    height: 450,
    facingMode: 'user'
  };

  useEffect(() => {
    if (paramState) {
      setFilesUpload(paramState);
    }
  }, [paramState]);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setImgSrc(imageSrc);
    setShowImage(true);
  }, [webcamRef, setImgSrc]);

  const retake = useCallback(() => {
    setShowImage(false);
  }, [setShowImage]);

  const submitImage = useCallback(() => {
    if (filesUpload && filesUpload.front === '') {
      navigate('/proof-of-identity-back', {
        state: { ...filesUpload, front: imgSrc }
      });
    } else if (filesUpload && filesUpload.back === '') {
      navigate('/proof-of-identity-selfie', {
        state: { ...filesUpload, back: imgSrc }
      });
    } else if (filesUpload && filesUpload.selfie === '') {
      navigate('/finish-process', {
        state: { ...filesUpload, selfie: imgSrc }
      });
    }
  }, [imgSrc]);

  return (
    <>
      {showImage && imgSrc ? (
        <>
          <div className={classes.imageContainer}>
            <img src={imgSrc} className={classes.image} />
          </div>
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
            className={classes.webcamContainer}
            style={{ height: height * 0.85 }}
          >
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </div>
          <div className={classes.buttonCaptureContainer}>
            <Button
              className={classes.button}
              variant="contained"
              onClick={capture}
            >
              {captureText}
            </Button>
          </div>
          <div className={classes.rectangle} />
        </>
      )}
    </>
  );
};
export default CapturePhoto;
