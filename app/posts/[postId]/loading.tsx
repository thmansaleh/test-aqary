
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function loading() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
    <Skeleton variant="circular" width={40} height={40} />
    <Skeleton variant="rounded" width={210} height={20} />
    </div>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
    <Skeleton variant="circular" width={40} height={40} />
    <Skeleton variant="rounded" width={210} height={20} />
    </div>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
    <Skeleton variant="circular" width={40} height={40} />
    <Skeleton variant="rounded" width={210} height={20} />
    </div>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
    <Skeleton variant="circular" width={40} height={40} />
    <Skeleton variant="rounded" width={210} height={20} />
    </div>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
    <Skeleton variant="circular" width={40} height={40} />
    <Skeleton variant="rounded" width={210} height={20} />
    </div>
    </Stack>
  );
}

