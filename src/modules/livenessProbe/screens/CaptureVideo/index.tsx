import { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { Button, Typography } from '@mui/material';
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

const CaptureVideo = () => {
  const classes = useStyles();
  const { height } = useWindowDimensions();
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const paramState = state as IDocumentPhoto;
  const webcamRef = useRef<Webcam>(null);
  const mediaRecorderRef = useRef<MediaRecorder>(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  const [filesUpload, setFilesUpload] = useState<IDocumentPhoto>(
    initialPersonDocumentFiles
  );
  const continueText = useTranslator('tid_next');
  const retakeText = useTranslator('tid_retake');
  const startCaptureText = useTranslator('tid_start_capture');
  const stopCaptureText = useTranslator('tid_stop_capture');
  const phraseToSayText = useTranslator('tid_proof_of_identity_phrase_to_say');
  const videoEndingText = useTranslator('tid_video_recorded');
  let newMediaRecorder: MediaRecorder;

  useEffect(() => {
    if (paramState) {
      setFilesUpload(paramState);
    }
  }, [paramState]);

  const retake = useCallback(() => {
    setShowVideo(false);
  }, [setShowVideo]);

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    if (webcamRef.current && webcamRef.current?.stream) {
      newMediaRecorder = new MediaRecorder(webcamRef.current?.stream, {
        mimeType: 'video/webm'
      });
      newMediaRecorder.addEventListener('dataavailable', handleDataAvailable);
      newMediaRecorder.start();
    }
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = useCallback(
    ({ data }: any) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = useCallback(() => {
    newMediaRecorder?.stop();
    setCapturing(false);
    setShowVideo(true);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: 'video/webm'
      });
      setRecordedChunks([]);
      navigate('/send-files', {
        state: { ...filesUpload, selfie: blob }
      });
    }
  }, [recordedChunks]);

  return (
    <>
      {showVideo ? (
        <>
          <div className={classes.centralContainer}>
            <Typography variant="h5" className={classes.centralText}>
              {videoEndingText}
            </Typography>
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
                onClick={handleDownload}
              >
                {continueText}
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className={classes.webcamContainer}
            style={{ height: height * 0.85 }}
          >
            <Webcam audio={true} ref={webcamRef} />
          </div>
          <div className={classes.buttonCaptureContainer}>
            {capturing ? (
              <Button
                className={classes.button}
                variant="contained"
                onClick={handleStopCaptureClick}
              >
                {stopCaptureText}
              </Button>
            ) : (
              <Button
                className={classes.button}
                variant="contained"
                onClick={handleStartCaptureClick}
              >
                {startCaptureText}
              </Button>
            )}
          </div>
          {capturing && (
            <div className={classes.rectangle}>
              <Typography variant="h4" style={{ color: 'white' }}>
                {phraseToSayText}
              </Typography>
            </div>
          )}
        </>
      )}
    </>
  );
};
export default CaptureVideo;
