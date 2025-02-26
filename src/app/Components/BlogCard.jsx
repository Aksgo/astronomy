"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';

export default function BlogCard(props) {
  const { title, disc, image, link } = props;

  return (
    <div className="w-full flex justify-center mt-8">
      <Link href={link} passHref target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', width: '100%' }}>
        <Card
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'stretch', // Stretches card to max height
            width: '100%',
            maxWidth: 1000,
            minHeight: 350, // Ensures consistent min height for each row
            boxShadow: 3,
            borderRadius: '16px',
            backgroundColor: '#fff',
          }}
        >
          <CardActionArea
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              width: '100%',
              height: '100%' // Ensures card action area stretches too
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: { xs: '100%', sm: '40%' },
                height: '100%', // Stretch the image height to fit the tallest card
                objectFit: 'cover',
              }}
              image={image}
              alt={`Image of ${title}`}
            />
            <CardContent
              sx={{
                width: { xs: '100%', sm: '60%' },
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                padding: 3,
              }}
            >
              <div>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {disc}
                </Typography>
              </div>
              {/* Filler space for shorter cards */}
              <div style={{ flexGrow: 1 }}></div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
}
