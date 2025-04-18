import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stepper,
  Step,
  StepLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Alert,
  Grid,
  IconButton,
  Container,
  Chip
} from "@mui/material";
import { blue } from "@mui/material/colors";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import LockIcon from "@mui/icons-material/Lock";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import { blueGrey } from "@mui/material/colors";

// Your current AboutInvestment component
const AboutInvestment = () => {
  const [quizAnswers, setQuizAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  });
  const [quizScore, setQuizScore] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [openQuiz, setOpenQuiz] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    "What is the main asset in stock market investments?",
    "What is a key strategy for minimizing investment risks?",
    "What is the method for maximizing returns over time?",
    "What strategy helps in managing the risk of investment?",
    "What should you maintain to ensure balanced investment growth?",
  ];

  const handleQuizSubmit = () => {
    let score = 0;
    if (quizAnswers.question1.toLowerCase() === "stocks") score++;
    if (quizAnswers.question2.toLowerCase() === "diversify") score++;
    if (quizAnswers.question3.toLowerCase() === "compounding") score++;
    if (quizAnswers.question4.toLowerCase() === "risk management") score++;
    if (quizAnswers.question5.toLowerCase() === "portfolio") score++;

    setQuizScore(score);
    setShowNotification(true);
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  const handleQuizChange = (event) => {
    setQuizAnswers({ ...quizAnswers, [`question${activeStep + 1}`]: event.target.value });
  };

  const openQuizModal = () => setOpenQuiz(true);
  const closeQuizModal = () => setOpenQuiz(false);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f3f4f6", padding: 3 }}>
      <Box sx={{ textAlign: "center", mt: 10, maxWidth: "900px", margin: "auto" }}>
        <Typography variant="h5" color="black" sx={{ mt: 6 }}>
          Unlock the potential of the stock market with smart investments. Maximize your financial growth with data-driven strategies.
        </Typography>
      </Box>

      {/* Video Embedding */}
      <Box sx={{ marginTop: 6, textAlign: "center" }}>
        {/* <Typography variant="h5" color={blue[700]} fontWeight="bold">
          Learn More About Stock Market Investments
        </Typography> */}
        <Box sx={{ mt: 4 }}>
          <iframe
            width="1000"
            height="505"
            src="https://www.youtube.com/embed/MG8mqrCUQWo?si=zkzod0dMGi0wZd4H"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Box>
      </Box>

      {/* Take Quiz Button */}
      <Box sx={{ textAlign: "center", marginTop: 6 }}>
        <Button variant="contained" color="primary" onClick={openQuizModal}>
          Take the Investment Quiz
        </Button>
      </Box>

      {/* Modal for Quiz */}
      <Dialog open={openQuiz} onClose={closeQuizModal} maxWidth="sm" fullWidth>
        <DialogTitle>Investment Quiz</DialogTitle>
        <DialogContent>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box sx={{ paddingTop: 4 }}>
            {/* Step Content */}
            {activeStep === 0 && (
              <Card sx={{ marginBottom: 2 }}>
                <CardContent>
                  <RadioGroup
                    value={quizAnswers.question1}
                    onChange={handleQuizChange}
                  >
                    <FormControlLabel
                      value="stocks"
                      control={<Radio />}
                      label="Stocks"
                    />
                    <FormControlLabel
                      value="bonds"
                      control={<Radio />}
                      label="Bonds"
                    />
                    <FormControlLabel
                      value="real estate"
                      control={<Radio />}
                      label="Real Estate"
                    />
                  </RadioGroup>
                </CardContent>
              </Card>
            )}

            {activeStep === 1 && (
              <Card sx={{ marginBottom: 2 }}>
                <CardContent>
                  <RadioGroup
                    value={quizAnswers.question2}
                    onChange={handleQuizChange}
                  >
                    <FormControlLabel
                      value="diversify"
                      control={<Radio />}
                      label="Diversify"
                    />
                    <FormControlLabel
                      value="focus"
                      control={<Radio />}
                      label="Focus"
                    />
                    <FormControlLabel
                      value="risk"
                      control={<Radio />}
                      label="Risk"
                    />
                  </RadioGroup>
                </CardContent>
              </Card>
            )}

            {activeStep === 2 && (
              <Card sx={{ marginBottom: 2 }}>
                <CardContent>
                  <RadioGroup
                    value={quizAnswers.question3}
                    onChange={handleQuizChange}
                  >
                    <FormControlLabel
                      value="compounding"
                      control={<Radio />}
                      label="Compounding"
                    />
                    <FormControlLabel
                      value="short term"
                      control={<Radio />}
                      label="Short Term"
                    />
                    <FormControlLabel
                      value="investment"
                      control={<Radio />}
                      label="Investment"
                    />
                  </RadioGroup>
                </CardContent>
              </Card>
            )}

            {activeStep === 3 && (
              <Card sx={{ marginBottom: 2 }}>
                <CardContent>
                  <RadioGroup
                    value={quizAnswers.question4}
                    onChange={handleQuizChange}
                  >
                    <FormControlLabel
                      value="risk management"
                      control={<Radio />}
                      label="Risk Management"
                    />
                    <FormControlLabel
                      value="short term"
                      control={<Radio />}
                      label="Short Term"
                    />
                    <FormControlLabel
                      value="growth"
                      control={<Radio />}
                      label="Growth"
                    />
                  </RadioGroup>
                </CardContent>
              </Card>
            )}

            {activeStep === 4 && (
              <Card sx={{ marginBottom: 2 }}>
                <CardContent>
                  <RadioGroup
                    value={quizAnswers.question5}
                    onChange={handleQuizChange}
                  >
                    <FormControlLabel
                      value="portfolio"
                      control={<Radio />}
                      label="Portfolio"
                    />
                    <FormControlLabel
                      value="risk"
                      control={<Radio />}
                      label="Risk"
                    />
                    <FormControlLabel
                      value="balance"
                      control={<Radio />}
                      label="Balance"
                    />
                  </RadioGroup>
                </CardContent>
              </Card>
            )}

            <Box sx={{ textAlign: "center", marginTop: 2 }}>
              <Button variant="contained" onClick={handleBack} disabled={activeStep === 0} sx={{ marginRight: 2 }}>
                Back
              </Button>
              <Button variant="contained" onClick={handleNext} sx={{ marginRight: 2 }}>
                Next
              </Button>
              {activeStep === steps.length - 1 && (
                <Button variant="contained" onClick={handleQuizSubmit}>
                  Submit Quiz
                </Button>
              )}
            </Box>
          </Box>

          {showNotification && (
            <Alert sx={{ marginTop: 2 }} severity={quizScore === 5 ? "success" : "error"}>
              {quizScore === 5
                ? "Congratulations! You answered all questions correctly."
                : `You got ${quizScore} out of 5 correct.`}
            </Alert>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeQuizModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* New Section: Features */}
      <Grid container spacing={4} sx={{ marginTop: 4, justifyContent: "center" }}>
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: "center", backgroundColor: "#ffffff", padding: 3, borderRadius: 2 }}>
            <IconButton sx={{ backgroundColor: blue[100], padding: 2, borderRadius: "50%" }}>
              <FastRewindIcon sx={{ fontSize: 40, color: blue[500] }} />
            </IconButton>
            <Typography variant="h5" fontWeight="bold" color={blue[500]} sx={{ mt: 2 }}>
            Invest Smart, Invest in Stocks
            </Typography>
            <Typography color="textSecondary" sx={{ mt: 1 }}>
            The stock market offers an incredible opportunity for growing wealth . By investing in stocks, you become a partial owner of companies. 
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: "center", backgroundColor: "#ffffff", padding: 3, borderRadius: 2 }}>
          <IconButton sx={{ backgroundColor: blue[100], padding: 2, borderRadius: "50%" }}>
  <LockIcon sx={{ fontSize: 40, color: blue[500] }} />
</IconButton>
<Typography variant="h5" fontWeight="bold" color={blue[500]} sx={{ mt: 2 }}>
  Secure and Reliable Investments
</Typography>
<Typography color="textSecondary" sx={{ mt: 1 }}>
  Stock market investments are regulated by strict government policies and financial institutions to ensure transparency and fairness.
</Typography>

          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: "center", backgroundColor: "#ffffff", padding: 3, borderRadius: 2 }}>
            <IconButton sx={{ backgroundColor: blue[100], padding: 2, borderRadius: "50%" }}>
              <IntegrationInstructionsIcon sx={{ fontSize: 40, color: blue[500] }} />
            </IconButton>
            <Typography variant="h5" fontWeight="bold" color={blue[500]} sx={{ mt: 2 }}>
  Easy Stock Portfolio Management
</Typography>
<Typography color="textSecondary" sx={{ mt: 1 }}>
  Effortlessly manage your stock portfolio with our platform. It seamlessly integrates with various brokerage accounts and increase the range.
</Typography>

          </Box>
        </Grid>
      </Grid>

      {/* What People Say Section */}
      <Box sx={{ marginTop: 6, textAlign: "center" }}>
        <Typography variant="h5" color={blue[700]} fontWeight="bold">
          What do people say?
        </Typography>
        <Grid container spacing={4} sx={{ marginTop: 3, justifyContent: "center" }}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ padding: 3, backgroundColor: "#ffffff", borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold" color={blue[500]}>
                John Doe
              </Typography>
              <Typography color="textSecondary" sx={{ mt: 1 }}>
                "The face recognition system has made attendance so much more efficient and hassle-free."
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ padding: 3, backgroundColor: "#ffffff", borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold" color={blue[500]}>
                Emily Smith
              </Typography>
              <Typography color="textSecondary" sx={{ mt: 1 }}>
                "No more signing in or worrying about missing attendance. The system is quick and reliable!"
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ textAlign: "center", mt: 4, padding: 2, backgroundColor: "#1e40af", color: "white" }}>
        <Typography variant="body2">© 2025 TradePulse Stock Market Investment Platform</Typography>
      </Box>
    </Box>
  );
};

export default AboutInvestment;
