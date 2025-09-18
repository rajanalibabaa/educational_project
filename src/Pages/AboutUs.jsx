import React, { useEffect } from 'react';
import { 
  Typography, 
  Box, 
  Divider, 
  Paper, 
  Grid,
  Chip,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
  Container
} from '@mui/material';
import {
  School,
  Work,
  Groups,
  EmojiEvents,
  LocationOn,
  Star,
  TrendingUp,
  Psychology
} from '@mui/icons-material';
// import '@fontsource/roboto';
// import '@fontsource/montserrat';

const AboutUs = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const facultyMembers = [
    {
      name: "M. Nandhakumar",
      qualification: "MBA (Anna University)",
      experience: "Prepared for UPSC exam since 2011",
      prelimsCleared: 4,
      mainsAppearance: 4,
      interviewAppearance: 1,
      teachingExperience: "Since 2017",
      studentsUPSC: 1000,
      studentsTNPSC: 500,
      expertise: ["Geography", "Economics", "Current Affairs"],
      visitingFacultyAt: [
        "Tamil Nadu Career Services Coaching Institute",
        "Integrations IAS Academy",
        "Focus IAS",
      ],
      avatarColor: "#FF6B35",
    },
    {
      name: "R. Krishnan",
      qualification: "B.E (Mechanical Engineering), M.A (Historical Studies)",
      experience: "Prepared for UPSC exam since 2016",
      teachingExperience: "Since 2019",
      studentsUPSC: 700,
      studentsTNPSC: 2000,
      studentsSSC: 400,
      seniorFacultyOf: "Kalvi Tholaikatchi",
      visitingFacultyAt: [
        "Tamilnadu Career Services Coaching Institute",
        "Integrations IAS Academy",
        "Thiran IAS Academy",
        "Aarvam IAS Academy",
      ],
      avatarColor: "#2E86AB",
    },
  ];

  return (
    <Container maxWidth="false" sx={{ px: { xs: 1, sm: 3 }, py: { xs: 4, md: 8 }, }}>
      <Box 
        sx={{ 
          fontFamily: 'Roboto, sans-serif',
          background: "linear-gradient(to bottom, #f9f9f9, #ffffff)",
          borderRadius: 4,
          overflow: "hidden",
          position: "relative",
          padding:"8px"
        }}
      >
        {/* Background elements */}
        <Box 
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "40%",
            height: "40%",
            // background: "radial-gradient(circle, rgba(255,107,53,0.1) 0%, rgba(255,255,255,0) 70%)",
            zIndex: 0
          }}
        />
        <Box 
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "30%",
            height: "30%",
            background: "radial-gradient(circle, rgba(46,134,171,0.1) 0%, rgba(255,255,255,0) 70%)",
            zIndex: 0
          }}
        />
        
        {/* Heading */}
        <Box sx={{ textAlign: 'center', marginBottom: '3rem', position: "relative", zIndex: 1 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 800,
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.5rem' },
              mb: 2,
              color: '#1f2937',
              textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            About <span style={{ 
              color: '#FF6B35',
              background: "linear-gradient(45deg, #FF6B35, #FF8E53)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>INTEGRATIONS</span>?
          </Typography>
          <Box style={{ height: '4px', backgroundColor: '#FF6B35', margin: '0 auto 1.5rem', borderRadius: 2, width: "80px" }} />
        </Box>

        {/* About Us Text */}
        <Typography 
          sx={{ 
            mb: { xs: 4, md: 6 }, 
            fontSize: { xs: '1rem', sm: '1.125rem' }, 
            lineHeight: 1.8, 
            textAlign: { xs: 'left', md: 'justify' }, 
            color: '#4b5563',
            px: { xs: 1, md: 4 },
            background: "rgba(255,255,255,0.7)",
            p: { xs: 2, md: 3 },
            borderRadius: 4,
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
          }}
        >
          “We welcome you with thanks for selecting our Academy”. We have proven a
          distinctive curriculum providing comprehensive coaching to aspirants,
          inculcating cracking aptitude in civil services exams. With a proven
          track record of results, we strive to be your trusted guide to make your
          road less travel to reach your goal of becoming the future manager of this Nation.
        </Typography>

        {/* Mission & Vision */}
        <Box
  sx={{
    display: "flex",
    flexWrap: "wrap",
    gap: { xs: 4, md: 4 }, // increased gap for both mobile and desktop
    mb: { xs: 6, md: 8 },
  }}
>
  {/* Mission Card */}
  <Box
    sx={{
      flex: { xs: "1 1 100%", md: "1 1 calc(50% - 16px)" },
      mb: { xs: 2, md: 3 }, // extra bottom margin for mobile
    }}
  >
    <Paper
      sx={{
        p: { xs: 2, md: 4 },
        borderRadius: 3,
        boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
        background: "linear-gradient(135deg, #fff 0%, #f8f9fa 100%)",
        height: "100%",
        borderLeft: "4px solid #FF6B35",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <TrendingUp
          sx={{ color: "#FF6B35", fontSize: { xs: 28, md: 32 }, mr: 2 }}
        />
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            color: "#FF6B35",
            fontSize: { xs: "1.3rem", md: "1.5rem" },
          }}
        >
          Mission
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: { xs: "0.9rem", md: "1rem" },
          lineHeight: 1.7,
          color: "#374151",
          pl: { xs: 0, md: 6 },
        }}
      >
        Empowering future leaders through excellence in education. Our academy is
        committed to providing comprehensive coaching, personalized guidance, and
        a nurturing environment to aspirants, equipping them with the knowledge,
        skills, and values necessary for success in the competitive world of civil services.
      </Typography>
    </Paper>
  </Box>

  {/* Vision Card */}
  <Box
    sx={{
      flex: { xs: "1 1 100%", md: "1 1 calc(50% - 16px)" },
      mb: { xs: 2, md: 3 }, 
    }}
  >
    <Paper
      sx={{
        p: { xs: 2, md: 4 },
        borderRadius: 3,
        boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
        background: "linear-gradient(135deg, #fff 0%, #f8f9fa 100%)",
        height: "100%",
        borderLeft: "4px solid #2E86AB",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Psychology
          sx={{ color: "#2E86AB", fontSize: { xs: 28, md: 32 }, mr: 2 }}
        />
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            color: "#2E86AB",
            fontSize: { xs: "1.3rem", md: "1.5rem" },
          }}
        >
          Vision
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: { xs: "0.9rem", md: "1rem" },
          lineHeight: 1.7,
          color: "#374151",
          pl: { xs: 0, md: 6 },
        }}
      >
        To emerge as a significant social impact organization grooming the future
        generation of our Nation and Society. Our vision is to promote a new ecosystem
        that enables aspirants to excel in exams and influence others with their knowledge,
        skills, and personal ethics.
      </Typography>
    </Paper>
  </Box>
</Box>


        <Divider sx={{ my: { xs: 4, md: 6 }, borderColor: '#FF6B35', borderWidth: 1 }} />

        {/* Faculty Section */}
        <Typography 
          variant="h3" 
          sx={{ 
            fontFamily: 'Montserrat, sans-serif', 
            fontWeight: 700, 
            color: '#1f2937', 
            mb: 4, 
            textAlign: 'center',
            fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.4rem' }
          }}
        >
          Our <span style={{ color: '#FF6B35' }}>Expert</span> Faculty
        </Typography>

        <Box
  sx={{
    display: "flex",
    flexWrap: "wrap",
    gap: 4, // gap between cards
    mb: { xs: 4, md: 6 },
    justifyContent: { xs: "center", md: "flex-start" }, // center on mobile, left on desktop
    
  }}
>
  {facultyMembers.map((faculty, index) => (
    <Box
      key={index}
      sx={{
        flex: { xs: "1 1 100%", md: "1 1 calc(50% - 16px)" }, // 1 card on mobile, 2 cards on desktop
        minWidth: { xs: "100%", md: "calc(50% - 16px)" },
        mt:2
      }}
    >
      <Card 
        sx={{
          height: "100%",
          p: { xs: 2, md: 3 },
          borderRadius: 3,
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          background: "linear-gradient(to bottom right, #ffffff, #f8f9fa)",
          display: "flex",
          flexDirection: "column",
          transition: "all 0.3s ease"
        }}
      >
        <CardContent sx={{ p: 0, flexGrow: 1 }}>
          {/* Avatar and Name */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 3, flexDirection: isSmallMobile ? "column" : "row", textAlign: isSmallMobile ? "center" : "left" }}>
            <Avatar
              sx={{
                bgcolor: faculty.avatarColor,
                width: { xs: 60, md: 70 },
                height: { xs: 60, md: 70 },
                mr: isSmallMobile ? 0 : 3,
                mb: isSmallMobile ? 2 : 0,
                fontSize: { xs: "1.5rem", md: "1.8rem" },
                fontWeight: "bold"
              }}
            >
              {faculty.name.split(' ').map(n => n[0]).join('')}
            </Avatar>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#1f2937' }}>{faculty.name}</Typography>
              <Typography sx={{ color: '#4b5563', fontSize: '0.85rem' }}>{faculty.qualification}</Typography>
            </Box>
          </Box>

          {/* Stats */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3, mt: 2 }}>
            {/* Teaching */}
            <Paper sx={{ flex: "1 1 100%", p: 1, textAlign: "center", background: "rgba(255,107,53,0.1)", borderRadius: 2 }}>
              <School sx={{ color: '#FF6B35', fontSize: 20, mb: 0.5 }} />
              <Typography variant="body2" sx={{ fontWeight: 600, color: '#1f2937' }}>Teaching</Typography>
              <Typography variant="body2" sx={{ color: '#4b5563' }}>{faculty.teachingExperience}</Typography>
            </Paper>
            {/* Experience */}
            <Paper sx={{ flex: "1 1 48%", p: 1, textAlign: "center", background: "rgba(46,134,171,0.1)", borderRadius: 2 }}>
              <Work sx={{ color: '#2E86AB', fontSize: 20, mb: 0.5 }} />
              <Typography variant="body2" sx={{ fontWeight: 600, color: '#1f2937' }}>Experience</Typography>
              <Typography variant="body2" sx={{ color: '#4b5563' }}>{faculty.experience}</Typography>
            </Paper>
            {/* UPSC Students */}
            <Paper sx={{ flex: "1 1 48%", p: 1, textAlign: "center", background: "rgba(255,107,53,0.1)", borderRadius: 2 }}>
              <Groups sx={{ color: '#FF6B35', fontSize: 20, mb: 0.5 }} />
              <Typography variant="body2" sx={{ fontWeight: 600, color: '#1f2937' }}>UPSC Students</Typography>
              <Typography variant="body2" sx={{ color: '#4b5563' }}>{faculty.studentsUPSC}+</Typography>
            </Paper>
            {/* TNPSC Students */}
            <Paper sx={{ flex: "1 1 48%", p: 1, textAlign: "center", background: "rgba(46,134,171,0.1)", borderRadius: 2 }}>
              <EmojiEvents sx={{ color: '#2E86AB', fontSize: 20, mb: 0.5 }} />
              <Typography variant="body2" sx={{ fontWeight: 600, color: '#1f2937' }}>TNPSC Students</Typography>
              <Typography variant="body2" sx={{ color: '#4b5563' }}>{faculty.studentsTNPSC}+</Typography>
            </Paper>
          </Box>

          {/* Expertise Chips */}
          {faculty.expertise && (
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>Areas of Expertise:</Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {faculty.expertise.map((exp, idx) => (
                  <Chip key={idx} label={exp} size="small" sx={{ background: "linear-gradient(45deg, #FF6B35, #FF8E53)", color: "white" }} />
                ))}
              </Box>
            </Box>
          )}

          {/* Visiting Faculty */}
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>Visiting Faculty At:</Typography>
            <List dense sx={{ py: 0 }}>
              {faculty.visitingFacultyAt.map((inst, idx) => (
                <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <LocationOn sx={{ color: '#FF6B35' }} />
                  </ListItemIcon>
                  <ListItemText primary={inst} primaryTypographyProps={{ variant: 'body2', sx: { color: '#4b5563' } }} />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Additional Info */}
          {faculty.seniorFacultyOf && (
            <Box sx={{ mt: 2, p: 1, background: "rgba(46,134,171,0.1)", borderRadius: 2 }}>
              <Typography variant="body2" sx={{ display: "flex", alignItems: "center", color: '#2E86AB', fontWeight: 500 }}>
                <Star sx={{ fontSize: 18, mr: 1 }} /> Senior Faculty of {faculty.seniorFacultyOf}
              </Typography>
            </Box>
          )}

          {faculty.prelimsCleared && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>UPSC Achievements:</Typography>
              <Typography variant="body2" sx={{ color: '#4b5563' }}>
                Prelims Cleared: {faculty.prelimsCleared} | Mains Appearance: {faculty.mainsAppearance} | Interview Appearance: {faculty.interviewAppearance}
              </Typography>
            </Box>
          )}

        </CardContent>
      </Card>
    </Box>
  ))}
</Box>



        
      </Box>
      {/* Final CTA */}
        <Box sx={{ textAlign: "center", marginTop: "4rem" }}>
          <Typography 
            variant="h6" 
            sx={{ fontFamily: 'Montserrat, sans-serif', color: '#1f2937', mb: 2, fontSize: { xs: '1rem', md: '1.25rem' } }}
          >
            Join hundreds of successful students who have achieved their dreams with our guidance.
          </Typography>
          <Paper 
            sx={{ 
              display: "inline-block",
              px: 3,
              py: 1,
              borderRadius: 2,
              background: "linear-gradient(45deg, #FF6B35, #FF8E53)",
              color: "white",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 5px 15px rgba(255,107,53,0.3)",
              fontSize: { xs: '0.9rem', md: '1rem' }
            }}
          >
            Start Your Journey Today
          </Paper>
        </Box>
    </Container>
  );
};

export default AboutUs;
