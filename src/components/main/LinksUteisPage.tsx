import { Box, Typography, Link } from '@mui/material';
import { linksUteisData } from '../../data';
import { useCampus } from '../../contexts/CampusContext';

const LinksUteisPage = () => {
  const { getCampusData } = useCampus();
  const content = getCampusData(linksUteisData);

  return (
    <Box sx={{ p: 4, textAlign: 'center' }}> 
      <Typography variant="h5" fontWeight={600} mb={3}>
        {content?.titulo}
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        {content?.links.map((item, index) => (
          <Box key={index} sx={{ py: 1 }}>
            {item.url ? (
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'primary.main',
                  textDecoration: 'underline',
                  fontSize: '1rem',
                  fontWeight: 400,
                  cursor: 'pointer',
                  textAlign: 'center',
                  '&:hover': {
                    color: 'primary.dark',
                    textDecoration: 'underline'
                  }
                }}
              >
                {item.text}
              </Link>
            ) : (
              <Typography
                sx={{
                  color: 'text.primary',
                  fontSize: '1rem',
                  fontWeight: 400,
                  textAlign: 'center'
                }}
              >
                {item.text}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default LinksUteisPage;
