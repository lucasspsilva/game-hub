import { Card, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

const GenreListSkeleton = () => {
  return (
    <Card padding={2} marginY={5}>
      <SkeletonCircle size="10" />
    </Card>
  );
};

export default GenreListSkeleton;
