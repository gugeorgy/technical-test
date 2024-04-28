// FollowUs.tsx
export default function FollowUs() {
  const follows = ['Y', 'D', 'F', 'I', 'T', 'X'];
  return (
    <div className="flex flex-col items-center sm:items-end sm:space-y-2">
      <h2 className="font-loomattic">Follow Us</h2>
      <div className="flex space-x-2">
        {follows.map(follow => (
          <div
            key={follow}
            className="bg-lightBlue flex items-center justify-center rounded-full size-5 sm:size-6 md:size-7 text-darkBlue"
          >
            {follow}
          </div>
        ))}
      </div>
    </div>
  );
}
