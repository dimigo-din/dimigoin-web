const OutlinedSymbol = ({ size }: { size: string | number }) => {
  return (
    <svg
      width={String(size)}
      height={String(size)}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3362_2235)">
        <rect
          x="1.38791"
          y="82.639"
          width="97.2222"
          height="15.9722"
          rx="7.98611"
          stroke="#E83C77"
          strokeWidth="2.77778"
        />
        <path
          d="M9.20041 34.3751C9.20041 29.9645 12.7759 26.389 17.1865 26.389C21.5971 26.389 25.1726 29.9645 25.1726 34.3751L25.1726 65.6251C25.1726 70.0357 21.5971 73.6112 17.1865 73.6112C12.7759 73.6112 9.20041 70.0357 9.20041 65.6251L9.20041 34.3751Z"
          stroke="#E83C77"
          strokeWidth="2.77778"
        />
        <path
          d="M9.20041 9.37512C9.20041 4.96451 12.7759 1.38901 17.1865 1.38901C21.5971 1.38901 25.1726 4.96451 25.1726 9.37512C25.1726 13.7857 21.5971 17.3612 17.1865 17.3612C12.7759 17.3612 9.20041 13.7857 9.20041 9.37512Z"
          stroke="#E83C77"
          strokeWidth="2.77778"
        />
        <path
          d="M37.3254 39.0626C37.3254 24.2967 49.2956 12.3265 64.0615 12.3265C78.8275 12.3265 90.7976 24.2967 90.7976 39.0626V65.6251C90.7976 70.0357 87.2221 73.6112 82.8115 73.6112C78.4009 73.6112 74.8254 70.0357 74.8254 65.6251V39.0626C74.8254 33.1179 70.0063 28.2987 64.0615 28.2987C58.1168 28.2987 53.2976 33.1179 53.2976 39.0626V65.6251C53.2976 70.0357 49.7221 73.6112 45.3115 73.6112C40.9009 73.6112 37.3254 70.0357 37.3254 65.6251V39.0626Z"
          stroke="#E83C77"
          strokeWidth="2.77778"
        />
      </g>
      <defs>
        <clipPath id="clip0_3362_2235">
          <rect width="100" height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default OutlinedSymbol;
