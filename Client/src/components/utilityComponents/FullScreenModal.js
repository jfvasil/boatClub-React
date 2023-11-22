

const FullScreenModal = ({ Url, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-75"
        onClick={onClose}
      ></div>
      <div className="z-50">
        <img src={Url} alt="full screen view" className="max-w-full max-h-full" />
      </div>
    </div>
  );
};

export default FullScreenModal;
