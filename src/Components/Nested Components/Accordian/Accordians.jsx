import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Slide } from "react-awesome-reveal";

export default function AccordionExpandIcon() {
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(() => ({
    borderBottom: "2px solid #6054aa",
    background: "transparent",
    color: "#ddd",
    marginBottom: "10px",
    borderRadius: "8px",
    "&::before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary {...props} />
  ))(({ theme }) => ({
    backgroundColor: "#333333c5",
    borderRadius: "8px",
    flexDirection: "row",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(180deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: "#33333351",
    borderRadius: "8px",
  }));

  return (
    <div>
      <Slide cascade damping={0.3} direction="left" triggerOnce>
        <Accordion>
          <AccordionSummary
            expandIcon={
              <svg
                width="17"
                height="19"
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="17" height="19" fill="url(#pattern0_386_582)" />
                <defs>
                  <pattern
                    id="pattern0_386_582"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_386_582"
                      transform="matrix(0.0223529 0 0 0.02 -0.0588235 0)"
                    />
                  </pattern>
                  <image
                    id="image0_386_582"
                    width="50"
                    height="50"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO3YSwrCMBRG4bpDLUoHunpFsPjYgMKRgEXFtrY2jxv8z6yQC/kIHSRFoZRSSiml1JiAFXAC9sC8MBawAA7ABai6Fs2AI8+unYsTBFSPPTWd3Z67FtcvC81g+ES46r6BsmUgKYZ2hPsuvw0uWwZvwCba7t//2ba9rIshWcAwFWEBgy9ESgy+ESkwhELExARHxMBEQ4TEREeEwCRD+MQkR/jAmEFMwZhD/IIxixiDMY8YgskGMeDuYOqOM+Vk8jiJEZh8ED2Y/BBN7kkJ2AFbi89LSimllFLqz7oD6IVh8k9Y3KsAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
            }
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography fontFamily={"Ubuntu"}>Who are we ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#72a5af" fontFamily={"Ubuntu"}>
              ISTE SC MANIT is one of the oldest societies of MANIT. We&apos;ve
              been awarded as the best students&apos; chapter in MP -
              Chhattisgarh region three times in a row. So when it comes to
              organising technical events, we&apos;re always at the top of the
              food chain.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Slide>
      <Slide cascade damping={0.3} direction="right" triggerOnce>
        <Accordion>
          <AccordionSummary
            expandIcon={
              <svg
                width="17"
                height="19"
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="17" height="19" fill="url(#pattern0_386_582)" />
                <defs>
                  <pattern
                    id="pattern0_386_582"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_386_582"
                      transform="matrix(0.0223529 0 0 0.02 -0.0588235 0)"
                    />
                  </pattern>
                  <image
                    id="image0_386_582"
                    width="50"
                    height="50"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO3YSwrCMBRG4bpDLUoHunpFsPjYgMKRgEXFtrY2jxv8z6yQC/kIHSRFoZRSSiml1JiAFXAC9sC8MBawAA7ABai6Fs2AI8+unYsTBFSPPTWd3Z67FtcvC81g+ES46r6BsmUgKYZ2hPsuvw0uWwZvwCba7t//2ba9rIshWcAwFWEBgy9ESgy+ESkwhELExARHxMBEQ4TEREeEwCRD+MQkR/jAmEFMwZhD/IIxixiDMY8YgskGMeDuYOqOM+Vk8jiJEZh8ED2Y/BBN7kkJ2AFbi89LSimllFLqz7oD6IVh8k9Y3KsAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
            }
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography fontFamily={"Ubuntu"}>
              What are we looking in a team?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#72a5af" fontFamily={"Ubuntu"}>
              You don&apos;t need to be a coding genius to participate in the
              event. The only requirement is your willingness and passion to
              learn. There is a winner among us and it can be you. So buckle up
              coz we&apos;re gonna make you an offer you can&apos;t refuse..
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Slide>
      <Slide cascade damping={0.3} direction="left" triggerOnce>
        <Accordion>
          <AccordionSummary
            expandIcon={
              <svg
                width="17"
                height="19"
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="17" height="19" fill="url(#pattern0_386_582)" />
                <defs>
                  <pattern
                    id="pattern0_386_582"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_386_582"
                      transform="matrix(0.0223529 0 0 0.02 -0.0588235 0)"
                    />
                  </pattern>
                  <image
                    id="image0_386_582"
                    width="50"
                    height="50"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO3YSwrCMBRG4bpDLUoHunpFsPjYgMKRgEXFtrY2jxv8z6yQC/kIHSRFoZRSSiml1JiAFXAC9sC8MBawAA7ABai6Fs2AI8+unYsTBFSPPTWd3Z67FtcvC81g+ES46r6BsmUgKYZ2hPsuvw0uWwZvwCba7t//2ba9rIshWcAwFWEBgy9ESgy+ESkwhELExARHxMBEQ4TEREeEwCRD+MQkR/jAmEFMwZhD/IIxixiDMY8YgskGMeDuYOqOM+Vk8jiJEZh8ED2Y/BBN7kkJ2AFbi89LSimllFLqz7oD6IVh8k9Y3KsAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
            }
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography fontFamily={"Ubuntu"}>What is version beta?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#72a5af" fontFamily={"Ubuntu"}>
              It&apos;s Central India&apos;s largest students&apos; held
              Hackathon in which students from all over the country compete
              against each other for 36 hours non-stop and put their coding
              skills to test.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Slide>
      <Slide cascade damping={0.3} direction="right" triggerOnce>
        <Accordion>
          <AccordionSummary
            expandIcon={
              <svg
                width="17"
                height="19"
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="17" height="19" fill="url(#pattern0_386_582)" />
                <defs>
                  <pattern
                    id="pattern0_386_582"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_386_582"
                      transform="matrix(0.0223529 0 0 0.02 -0.0588235 0)"
                    />
                  </pattern>
                  <image
                    id="image0_386_582"
                    width="50"
                    height="50"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO3YSwrCMBRG4bpDLUoHunpFsPjYgMKRgEXFtrY2jxv8z6yQC/kIHSRFoZRSSiml1JiAFXAC9sC8MBawAA7ABai6Fs2AI8+unYsTBFSPPTWd3Z67FtcvC81g+ES46r6BsmUgKYZ2hPsuvw0uWwZvwCba7t//2ba9rIshWcAwFWEBgy9ESgy+ESkwhELExARHxMBEQ4TEREeEwCRD+MQkR/jAmEFMwZhD/IIxixiDMY8YgskGMeDuYOqOM+Vk8jiJEZh8ED2Y/BBN7kkJ2AFbi89LSimllFLqz7oD6IVh8k9Y3KsAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
            }
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <Typography fontFamily={"Ubuntu"}>
              Will Hackathon be conducted online?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#72a5af" fontFamily={"Ubuntu"}>
              No, the hackathon comes as a combo package of rewards and
              on-campus experience of NIT Bhopal.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Slide>
      <Slide cascade damping={0.3} direction="left" triggerOnce>
        <Accordion>
          <AccordionSummary
            expandIcon={
              <svg
                width="17"
                height="19"
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="17" height="19" fill="url(#pattern0_386_582)" />
                <defs>
                  <pattern
                    id="pattern0_386_582"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_386_582"
                      transform="matrix(0.0223529 0 0 0.02 -0.0588235 0)"
                    />
                  </pattern>
                  <image
                    id="image0_386_582"
                    width="50"
                    height="50"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO3YSwrCMBRG4bpDLUoHunpFsPjYgMKRgEXFtrY2jxv8z6yQC/kIHSRFoZRSSiml1JiAFXAC9sC8MBawAA7ABai6Fs2AI8+unYsTBFSPPTWd3Z67FtcvC81g+ES46r6BsmUgKYZ2hPsuvw0uWwZvwCba7t//2ba9rIshWcAwFWEBgy9ESgy+ESkwhELExARHxMBEQ4TEREeEwCRD+MQkR/jAmEFMwZhD/IIxixiDMY8YgskGMeDuYOqOM+Vk8jiJEZh8ED2Y/BBN7kkJ2AFbi89LSimllFLqz7oD6IVh8k9Y3KsAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
            }
            aria-controls="panel5d-content"
            id="panel5d-header"
          >
            <Typography fontFamily={"Ubuntu"}>
              Who should participate?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#72a5af" fontFamily={"Ubuntu"}>
              If you are a college student who is interested in solving
              real-life problems through the virtual world of your laptop
              screens, you&apos;re at the right place. The Hackathon is just for
              you.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Slide>
      <Slide cascade damping={0.3} direction="right" triggerOnce>
        <Accordion>
          <AccordionSummary
            expandIcon={
              <svg
                width="17"
                height="19"
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="17" height="19" fill="url(#pattern0_386_582)" />
                <defs>
                  <pattern
                    id="pattern0_386_582"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_386_582"
                      transform="matrix(0.0223529 0 0 0.02 -0.0588235 0)"
                    />
                  </pattern>
                  <image
                    id="image0_386_582"
                    width="50"
                    height="50"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO3YSwrCMBRG4bpDLUoHunpFsPjYgMKRgEXFtrY2jxv8z6yQC/kIHSRFoZRSSiml1JiAFXAC9sC8MBawAA7ABai6Fs2AI8+unYsTBFSPPTWd3Z67FtcvC81g+ES46r6BsmUgKYZ2hPsuvw0uWwZvwCba7t//2ba9rIshWcAwFWEBgy9ESgy+ESkwhELExARHxMBEQ4TEREeEwCRD+MQkR/jAmEFMwZhD/IIxixiDMY8YgskGMeDuYOqOM+Vk8jiJEZh8ED2Y/BBN7kkJ2AFbi89LSimllFLqz7oD6IVh8k9Y3KsAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
            }
            aria-controls="panel6d-content"
            id="panel6d-header"
          >
            <Typography fontFamily={"Ubuntu"}>
              What is the goal of Hackathon?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#72a5af" fontFamily={"Ubuntu"}>
              The main aim of Hackathon is to bring out the coding skills of
              students to practical use.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Slide>
      <Slide cascade damping={0.3} direction="left" triggerOnce>
        <Accordion>
          <AccordionSummary
            expandIcon={
              <svg
                width="17"
                height="19"
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="17" height="19" fill="url(#pattern0_386_582)" />
                <defs>
                  <pattern
                    id="pattern0_386_582"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_386_582"
                      transform="matrix(0.0223529 0 0 0.02 -0.0588235 0)"
                    />
                  </pattern>
                  <image
                    id="image0_386_582"
                    width="50"
                    height="50"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO3YSwrCMBRG4bpDLUoHunpFsPjYgMKRgEXFtrY2jxv8z6yQC/kIHSRFoZRSSiml1JiAFXAC9sC8MBawAA7ABai6Fs2AI8+unYsTBFSPPTWd3Z67FtcvC81g+ES46r6BsmUgKYZ2hPsuvw0uWwZvwCba7t//2ba9rIshWcAwFWEBgy9ESgy+ESkwhELExARHxMBEQ4TEREeEwCRD+MQkR/jAmEFMwZhD/IIxixiDMY8YgskGMeDuYOqOM+Vk8jiJEZh8ED2Y/BBN7kkJ2AFbi89LSimllFLqz7oD6IVh8k9Y3KsAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
            }
            aria-controls="panel7d-content"
            id="panel7d-header"
          >
            <Typography fontFamily={"Ubuntu"}>
              Number of members in a team?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#72a5af" fontFamily={"Ubuntu"}>
              The maximum no. of team members is 4. You can also participate in
              a team of 3 or 2 members. It&apos;s up to you. Choose your
              crewmates carefully to prevent being ejected.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Slide>
      <Slide cascade damping={0.3} direction="right" triggerOnce>
        <Accordion>
          <AccordionSummary
            expandIcon={
              <svg
                width="17"
                height="19"
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="17" height="19" fill="url(#pattern0_386_582)" />
                <defs>
                  <pattern
                    id="pattern0_386_582"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_386_582"
                      transform="matrix(0.0223529 0 0 0.02 -0.0588235 0)"
                    />
                  </pattern>
                  <image
                    id="image0_386_582"
                    width="50"
                    height="50"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO3YSwrCMBRG4bpDLUoHunpFsPjYgMKRgEXFtrY2jxv8z6yQC/kIHSRFoZRSSiml1JiAFXAC9sC8MBawAA7ABai6Fs2AI8+unYsTBFSPPTWd3Z67FtcvC81g+ES46r6BsmUgKYZ2hPsuvw0uWwZvwCba7t//2ba9rIshWcAwFWEBgy9ESgy+ESkwhELExARHxMBEQ4TEREeEwCRD+MQkR/jAmEFMwZhD/IIxixiDMY8YgskGMeDuYOqOM+Vk8jiJEZh8ED2Y/BBN7kkJ2AFbi89LSimllFLqz7oD6IVh8k9Y3KsAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
            }
            aria-controls="panel8d-content"
            id="panel8d-header"
          >
            <Typography fontFamily={"Ubuntu"}>
              How would I know if I got selected?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#72a5af" fontFamily={"Ubuntu"}>
              We&apos;ll mail you and let you know.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Slide>
      <Slide cascade damping={0.3} direction="left" triggerOnce>
        <Accordion className="panel">
          <AccordionSummary
            expandIcon={
              <svg
                width="17"
                height="19"
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="17" height="19" fill="url(#pattern0_386_582)" />
                <defs>
                  <pattern
                    id="pattern0_386_582"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_386_582"
                      transform="matrix(0.0223529 0 0 0.02 -0.0588235 0)"
                    />
                  </pattern>
                  <image
                    id="image0_386_582"
                    width="50"
                    height="50"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO3YSwrCMBRG4bpDLUoHunpFsPjYgMKRgEXFtrY2jxv8z6yQC/kIHSRFoZRSSiml1JiAFXAC9sC8MBawAA7ABai6Fs2AI8+unYsTBFSPPTWd3Z67FtcvC81g+ES46r6BsmUgKYZ2hPsuvw0uWwZvwCba7t//2ba9rIshWcAwFWEBgy9ESgy+ESkwhELExARHxMBEQ4TEREeEwCRD+MQkR/jAmEFMwZhD/IIxixiDMY8YgskGMeDuYOqOM+Vk8jiJEZh8ED2Y/BBN7kkJ2AFbi89LSimllFLqz7oD6IVh8k9Y3KsAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
            }
            aria-controls="panel9d-content"
            id="panel9d-header"
          >
            <Typography fontFamily={"Ubuntu"}>How to participate?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#72a5af" fontFamily={"Ubuntu"}>
              Visit our website to register for the Hackathon. You&apos;ll be
              provided all the details there.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Slide>
      <Slide cascade damping={0.3} direction="right" triggerOnce>
        <Accordion>
          <AccordionSummary
            expandIcon={
              <svg
                width="17"
                height="19"
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="17" height="19" fill="url(#pattern0_386_582)" />
                <defs>
                  <pattern
                    id="pattern0_386_582"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_386_582"
                      transform="matrix(0.0223529 0 0 0.02 -0.0588235 0)"
                    />
                  </pattern>
                  <image
                    id="image0_386_582"
                    width="50"
                    height="50"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO3YSwrCMBRG4bpDLUoHunpFsPjYgMKRgEXFtrY2jxv8z6yQC/kIHSRFoZRSSiml1JiAFXAC9sC8MBawAA7ABai6Fs2AI8+unYsTBFSPPTWd3Z67FtcvC81g+ES46r6BsmUgKYZ2hPsuvw0uWwZvwCba7t//2ba9rIshWcAwFWEBgy9ESgy+ESkwhELExARHxMBEQ4TEREeEwCRD+MQkR/jAmEFMwZhD/IIxixiDMY8YgskGMeDuYOqOM+Vk8jiJEZh8ED2Y/BBN7kkJ2AFbi89LSimllFLqz7oD6IVh8k9Y3KsAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
            }
            aria-controls="panel10d-content"
            id="panel10d-header"
          >
            <Typography fontFamily={"Ubuntu"}>
              Cost for participation in Hackathon?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#72a5af" fontFamily={"Ubuntu"}>
              If you don&apos;t count the internet cost and the electricity bill
              for your laptop, then it&apos;s zero. NIL. Nothing..
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Slide>
      <Slide cascade damping={0.3} direction="left" triggerOnce>
        <Accordion>
          <AccordionSummary
            expandIcon={
              <svg
                width="17"
                height="19"
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="17" height="19" fill="url(#pattern0_386_582)" />
                <defs>
                  <pattern
                    id="pattern0_386_582"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_386_582"
                      transform="matrix(0.0223529 0 0 0.02 -0.0588235 0)"
                    />
                  </pattern>
                  <image
                    id="image0_386_582"
                    width="50"
                    height="50"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO3YSwrCMBRG4bpDLUoHunpFsPjYgMKRgEXFtrY2jxv8z6yQC/kIHSRFoZRSSiml1JiAFXAC9sC8MBawAA7ABai6Fs2AI8+unYsTBFSPPTWd3Z67FtcvC81g+ES46r6BsmUgKYZ2hPsuvw0uWwZvwCba7t//2ba9rIshWcAwFWEBgy9ESgy+ESkwhELExARHxMBEQ4TEREeEwCRD+MQkR/jAmEFMwZhD/IIxixiDMY8YgskGMeDuYOqOM+Vk8jiJEZh8ED2Y/BBN7kkJ2AFbi89LSimllFLqz7oD6IVh8k9Y3KsAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
            }
            aria-controls="panel11d-content"
            id="panel11d-header"
          >
            <Typography fontFamily={"Ubuntu"}>
              What is selection procedure?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="#72a5af" fontFamily={"Ubuntu"}>
              Upload your GitHub profiles and CV while registering through
              Devfolio and you&apos;re all done. All the best!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Slide>
    </div>
  );
}
