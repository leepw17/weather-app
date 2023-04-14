import debounce from 'lodash.debounce';
import { useContext, useEffect, useRef } from 'react';
import { LocationContext, LocationContextType } from '../app';

export function Header() {
  const { location, setLocation } =
    useContext<LocationContextType>(LocationContext);
  const inputRef = useRef(null);

  useEffect(() => {
    return () => {
      setLocation(null);
    };
  }, []);

  const handleChange = debounce(({ target }) => {
    setLocation(target.value);
  }, 500);

  return (
    <div className="py-8 bg-white">
      <div className="flex flex-col sm:flex-row gap-4 mob justify-between items-center w-full sm:w-8/12 sm:mx-auto">
        <div>
          <img
            alt="Palmetto logo"
            src="https://palmetto.com/theme/default/images/palmetto-logo.svg"
            width="160"
          />
        </div>
        <div className="max-w-[352px] flex-grow">
          <form>
            <input
              className="shadow border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              type="text"
              placeholder="City,State or Zip"
              onChange={handleChange}
              ref={inputRef}
            />
          </form>
        </div>
        <div className="text-gray-800">
          US | <span>&#176;</span>F
        </div>
      </div>
    </div>
  );
}
