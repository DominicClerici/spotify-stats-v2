// was gonna do something cool but got lazy
const DynamicBackground = () => {
  return (
    <>
      <object className="absolute bottom-0 left-0 z-0 h-screen w-full overflow-hidden bg-black">
        <svg
          className="animate-bg-in h-full rotate-180 scale-110 blur-md"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3000 540"
          version="1.1"
        >
          <path
            d="M0 50L21.7 58C43.3 66 86.7 82 130.2 81C173.7 80 217.3 62 260.8 47.7C304.3 33.3 347.7 22.7 391.2 18.2C434.7 13.7 478.3 15.3 521.8 23.3C565.3 31.3 608.7 45.7 652.2 45.7C695.7 45.7 739.3 31.3 782.8 21.3C826.3 11.3 869.7 5.7 913 8.3C956.3 11 999.7 22 1043.2 22C1086.7 22 1130.3 11 1173.8 14.7C1217.3 18.3 1260.7 36.7 1304.2 47.7C1347.7 58.7 1391.3 62.3 1434.8 55.2C1478.3 48 1521.7 30 1565.2 21.8C1608.7 13.7 1652.3 15.3 1695.8 23.3C1739.3 31.3 1782.7 45.7 1826.2 54.7C1869.7 63.7 1913.3 67.3 1956.8 66.5C2000.3 65.7 2043.7 60.3 2087 55.8C2130.3 51.3 2173.7 47.7 2217.2 48.5C2260.7 49.3 2304.3 54.7 2347.8 54.7C2391.3 54.7 2434.7 49.3 2478.2 46.7C2521.7 44 2565.3 44 2608.8 55.7C2652.3 67.3 2695.7 90.7 2739.2 83.3C2782.7 76 2826.3 38 2869.8 26.3C2913.3 14.7 2956.7 29.3 2978.3 36.7L3000 44L3000 0L2978.3 0C2956.7 0 2913.3 0 2869.8 0C2826.3 0 2782.7 0 2739.2 0C2695.7 0 2652.3 0 2608.8 0C2565.3 0 2521.7 0 2478.2 0C2434.7 0 2391.3 0 2347.8 0C2304.3 0 2260.7 0 2217.2 0C2173.7 0 2130.3 0 2087 0C2043.7 0 2000.3 0 1956.8 0C1913.3 0 1869.7 0 1826.2 0C1782.7 0 1739.3 0 1695.8 0C1652.3 0 1608.7 0 1565.2 0C1521.7 0 1478.3 0 1434.8 0C1391.3 0 1347.7 0 1304.2 0C1260.7 0 1217.3 0 1173.8 0C1130.3 0 1086.7 0 1043.2 0C999.7 0 956.3 0 913 0C869.7 0 826.3 0 782.8 0C739.3 0 695.7 0 652.2 0C608.7 0 565.3 0 521.8 0C478.3 0 434.7 0 391.2 0C347.7 0 304.3 0 260.8 0C217.3 0 173.7 0 130.2 0C86.7 0 43.3 0 21.7 0L0 0Z"
            fill="#002812"
          />
          <path
            d="M0 125L21.7 160.2C43.3 195.3 86.7 265.7 130.2 273.8C173.7 282 217.3 228 260.8 191C304.3 154 347.7 134 391.2 135.8C434.7 137.7 478.3 161.3 521.8 161.3C565.3 161.3 608.7 137.7 652.2 123.2C695.7 108.7 739.3 103.3 782.8 98C826.3 92.7 869.7 87.3 913 92.8C956.3 98.3 999.7 114.7 1043.2 110.2C1086.7 105.7 1130.3 80.3 1173.8 83C1217.3 85.7 1260.7 116.3 1304.2 146C1347.7 175.7 1391.3 204.3 1434.8 194.3C1478.3 184.3 1521.7 135.7 1565.2 125.8C1608.7 116 1652.3 145 1695.8 141.5C1739.3 138 1782.7 102 1826.2 92C1869.7 82 1913.3 98 1956.8 97C2000.3 96 2043.7 78 2087 72.7C2130.3 67.3 2173.7 74.7 2217.2 82.8C2260.7 91 2304.3 100 2347.8 98.2C2391.3 96.3 2434.7 83.7 2478.2 117.8C2521.7 152 2565.3 233 2608.8 245.7C2652.3 258.3 2695.7 202.7 2739.2 151.3C2782.7 100 2826.3 53 2869.8 77.3C2913.3 101.7 2956.7 197.3 2978.3 245.2L3000 293L3000 42L2978.3 35C2956.7 28 2913.3 14 2869.8 25.7C2826.3 37.3 2782.7 74.7 2739.2 81.7C2695.7 88.7 2652.3 65.3 2608.8 53.7C2565.3 42 2521.7 42 2478.2 44.7C2434.7 47.3 2391.3 52.7 2347.8 52.7C2304.3 52.7 2260.7 47.3 2217.2 46.5C2173.7 45.7 2130.3 49.3 2087 53.8C2043.7 58.3 2000.3 63.7 1956.8 64.5C1913.3 65.3 1869.7 61.7 1826.2 52.7C1782.7 43.7 1739.3 29.3 1695.8 21.3C1652.3 13.3 1608.7 11.7 1565.2 19.8C1521.7 28 1478.3 46 1434.8 53.2C1391.3 60.3 1347.7 56.7 1304.2 46C1260.7 35.3 1217.3 17.7 1173.8 14C1130.3 10.3 1086.7 20.7 1043.2 20.7C999.7 20.7 956.3 10.3 913 7.7C869.7 5 826.3 10 782.8 19.7C739.3 29.3 695.7 43.7 652.2 43.7C608.7 43.7 565.3 29.3 521.8 21.3C478.3 13.3 434.7 11.7 391.2 16.2C347.7 20.7 304.3 31.3 260.8 45.7C217.3 60 173.7 78 130.2 79C86.7 80 43.3 64 21.7 56L0 48Z"
            fill="#032310"
          />
          <path
            d="M0 174L21.7 204.5C43.3 235 86.7 296 130.2 317.5C173.7 339 217.3 321 260.8 281.5C304.3 242 347.7 181 391.2 173.8C434.7 166.7 478.3 213.3 521.8 218.7C565.3 224 608.7 188 652.2 175.5C695.7 163 739.3 174 782.8 167.7C826.3 161.3 869.7 137.7 913 151.2C956.3 164.7 999.7 215.3 1043.2 221.7C1086.7 228 1130.3 190 1173.8 178.2C1217.3 166.3 1260.7 180.7 1304.2 200.5C1347.7 220.3 1391.3 245.7 1434.8 233.2C1478.3 220.7 1521.7 170.3 1565.2 172.2C1608.7 174 1652.3 228 1695.8 226.2C1739.3 224.3 1782.7 166.7 1826.2 139.7C1869.7 112.7 1913.3 116.3 1956.8 131.7C2000.3 147 2043.7 174 2087 171.3C2130.3 168.7 2173.7 136.3 2217.2 138.2C2260.7 140 2304.3 176 2347.8 188.5C2391.3 201 2434.7 190 2478.2 212.5C2521.7 235 2565.3 291 2608.8 301.8C2652.3 312.7 2695.7 278.3 2739.2 239.5C2782.7 200.7 2826.3 157.3 2869.8 184.3C2913.3 211.3 2956.7 308.7 2978.3 357.3L3000 406L3000 291L2978.3 243.2C2956.7 195.3 2913.3 99.7 2869.8 75.3C2826.3 51 2782.7 98 2739.2 149.3C2695.7 200.7 2652.3 256.3 2608.8 243.7C2565.3 231 2521.7 150 2478.2 115.8C2434.7 81.7 2391.3 94.3 2347.8 96.2C2304.3 98 2260.7 89 2217.2 80.8C2173.7 72.7 2130.3 65.3 2087 70.7C2043.7 76 2000.3 94 1956.8 95C1913.3 96 1869.7 80 1826.2 90C1782.7 100 1739.3 136 1695.8 139.5C1652.3 143 1608.7 114 1565.2 123.8C1521.7 133.7 1478.3 182.3 1434.8 192.3C1391.3 202.3 1347.7 173.7 1304.2 144C1260.7 114.3 1217.3 83.7 1173.8 81C1130.3 78.3 1086.7 103.7 1043.2 108.2C999.7 112.7 956.3 96.3 913 90.8C869.7 85.3 826.3 90.7 782.8 96C739.3 101.3 695.7 106.7 652.2 121.2C608.7 135.7 565.3 159.3 521.8 159.3C478.3 159.3 434.7 135.7 391.2 133.8C347.7 132 304.3 152 260.8 189C217.3 226 173.7 280 130.2 271.8C86.7 263.7 43.3 193.3 21.7 158.2L0 123Z"
            fill="#051f0f"
          />
          <path
            d="M0 368L21.7 368C43.3 368 86.7 368 130.2 369.8C173.7 371.7 217.3 375.3 260.8 367.3C304.3 359.3 347.7 339.7 391.2 341.5C434.7 343.3 478.3 366.7 521.8 372C565.3 377.3 608.7 364.7 652.2 361C695.7 357.3 739.3 362.7 782.8 359C826.3 355.3 869.7 342.7 913 342.7C956.3 342.7 999.7 355.3 1043.2 374.3C1086.7 393.3 1130.3 418.7 1173.8 408.8C1217.3 399 1260.7 354 1304.2 346.8C1347.7 339.7 1391.3 370.3 1434.8 373.8C1478.3 377.3 1521.7 353.7 1565.2 333.8C1608.7 314 1652.3 298 1695.8 305.3C1739.3 312.7 1782.7 343.3 1826.2 346C1869.7 348.7 1913.3 323.3 1956.8 321.5C2000.3 319.7 2043.7 341.3 2087 339.5C2130.3 337.7 2173.7 312.3 2217.2 307.8C2260.7 303.3 2304.3 319.7 2347.8 325.2C2391.3 330.7 2434.7 325.3 2478.2 329.8C2521.7 334.3 2565.3 348.7 2608.8 372C2652.3 395.3 2695.7 427.7 2739.2 421.3C2782.7 415 2826.3 370 2869.8 367.3C2913.3 364.7 2956.7 404.3 2978.3 424.2L3000 444L3000 404L2978.3 355.3C2956.7 306.7 2913.3 209.3 2869.8 182.3C2826.3 155.3 2782.7 198.7 2739.2 237.5C2695.7 276.3 2652.3 310.7 2608.8 299.8C2565.3 289 2521.7 233 2478.2 210.5C2434.7 188 2391.3 199 2347.8 186.5C2304.3 174 2260.7 138 2217.2 136.2C2173.7 134.3 2130.3 166.7 2087 169.3C2043.7 172 2000.3 145 1956.8 129.7C1913.3 114.3 1869.7 110.7 1826.2 137.7C1782.7 164.7 1739.3 222.3 1695.8 224.2C1652.3 226 1608.7 172 1565.2 170.2C1521.7 168.3 1478.3 218.7 1434.8 231.2C1391.3 243.7 1347.7 218.3 1304.2 198.5C1260.7 178.7 1217.3 164.3 1173.8 176.2C1130.3 188 1086.7 226 1043.2 219.7C999.7 213.3 956.3 162.7 913 149.2C869.7 135.7 826.3 159.3 782.8 165.7C739.3 172 695.7 161 652.2 173.5C608.7 186 565.3 222 521.8 216.7C478.3 211.3 434.7 164.7 391.2 171.8C347.7 179 304.3 240 260.8 279.5C217.3 319 173.7 337 130.2 315.5C86.7 294 43.3 233 21.7 202.5L0 172Z"
            fill="#041b0c"
          />
          <path
            d="M0 395L21.7 392.3C43.3 389.7 86.7 384.3 130.2 387C173.7 389.7 217.3 400.3 260.8 403C304.3 405.7 347.7 400.3 391.2 404C434.7 407.7 478.3 420.3 521.8 421.3C565.3 422.3 608.7 411.7 652.2 413.5C695.7 415.3 739.3 429.7 782.8 432.3C826.3 435 869.7 426 913 423.3C956.3 420.7 999.7 424.3 1043.2 434.2C1086.7 444 1130.3 460 1173.8 444.7C1217.3 429.3 1260.7 382.7 1304.2 380C1347.7 377.3 1391.3 418.7 1434.8 432.2C1478.3 445.7 1521.7 431.3 1565.2 411.5C1608.7 391.7 1652.3 366.3 1695.8 368.2C1739.3 370 1782.7 399 1826.2 399C1869.7 399 1913.3 370 1956.8 366.3C2000.3 362.7 2043.7 384.3 2087 388C2130.3 391.7 2173.7 377.3 2217.2 379.2C2260.7 381 2304.3 399 2347.8 399C2391.3 399 2434.7 381 2478.2 379.2C2521.7 377.3 2565.3 391.7 2608.8 413.2C2652.3 434.7 2695.7 463.3 2739.2 463.3C2782.7 463.3 2826.3 434.7 2869.8 434.7C2913.3 434.7 2956.7 463.3 2978.3 477.7L3000 492L3000 442L2978.3 422.2C2956.7 402.3 2913.3 362.7 2869.8 365.3C2826.3 368 2782.7 413 2739.2 419.3C2695.7 425.7 2652.3 393.3 2608.8 370C2565.3 346.7 2521.7 332.3 2478.2 327.8C2434.7 323.3 2391.3 328.7 2347.8 323.2C2304.3 317.7 2260.7 301.3 2217.2 305.8C2173.7 310.3 2130.3 335.7 2087 337.5C2043.7 339.3 2000.3 317.7 1956.8 319.5C1913.3 321.3 1869.7 346.7 1826.2 344C1782.7 341.3 1739.3 310.7 1695.8 303.3C1652.3 296 1608.7 312 1565.2 331.8C1521.7 351.7 1478.3 375.3 1434.8 371.8C1391.3 368.3 1347.7 337.7 1304.2 344.8C1260.7 352 1217.3 397 1173.8 406.8C1130.3 416.7 1086.7 391.3 1043.2 372.3C999.7 353.3 956.3 340.7 913 340.7C869.7 340.7 826.3 353.3 782.8 357C739.3 360.7 695.7 355.3 652.2 359C608.7 362.7 565.3 375.3 521.8 370C478.3 364.7 434.7 341.3 391.2 339.5C347.7 337.7 304.3 357.3 260.8 365.3C217.3 373.3 173.7 369.7 130.2 367.8C86.7 366 43.3 366 21.7 366L0 366Z"
            fill="#04170a"
          />
          <path
            d="M0 438L21.7 440.8C43.3 443.7 86.7 449.3 130.2 444.8C173.7 440.3 217.3 425.7 260.8 417.5C304.3 409.3 347.7 407.7 391.2 418.5C434.7 429.3 478.3 452.7 521.8 452.7C565.3 452.7 608.7 429.3 652.2 437.5C695.7 445.7 739.3 485.3 782.8 492.5C826.3 499.7 869.7 474.3 913 471.7C956.3 469 999.7 489 1043.2 499.8C1086.7 510.7 1130.3 512.3 1173.8 496C1217.3 479.7 1260.7 445.3 1304.2 440C1347.7 434.7 1391.3 458.3 1434.8 459.3C1478.3 460.3 1521.7 438.7 1565.2 426.8C1608.7 415 1652.3 413 1695.8 422.8C1739.3 432.7 1782.7 454.3 1826.2 454.3C1869.7 454.3 1913.3 432.7 1956.8 430C2000.3 427.3 2043.7 443.7 2087 445.5C2130.3 447.3 2173.7 434.7 2217.2 432C2260.7 429.3 2304.3 436.7 2347.8 430.3C2391.3 424 2434.7 404 2478.2 406.7C2521.7 409.3 2565.3 434.7 2608.8 453.7C2652.3 472.7 2695.7 485.3 2739.2 486.2C2782.7 487 2826.3 476 2869.8 477.8C2913.3 479.7 2956.7 494.3 2978.3 501.7L3000 509L3000 490L2978.3 475.7C2956.7 461.3 2913.3 432.7 2869.8 432.7C2826.3 432.7 2782.7 461.3 2739.2 461.3C2695.7 461.3 2652.3 432.7 2608.8 411.2C2565.3 389.7 2521.7 375.3 2478.2 377.2C2434.7 379 2391.3 397 2347.8 397C2304.3 397 2260.7 379 2217.2 377.2C2173.7 375.3 2130.3 389.7 2087 386C2043.7 382.3 2000.3 360.7 1956.8 364.3C1913.3 368 1869.7 397 1826.2 397C1782.7 397 1739.3 368 1695.8 366.2C1652.3 364.3 1608.7 389.7 1565.2 409.5C1521.7 429.3 1478.3 443.7 1434.8 430.2C1391.3 416.7 1347.7 375.3 1304.2 378C1260.7 380.7 1217.3 427.3 1173.8 442.7C1130.3 458 1086.7 442 1043.2 432.2C999.7 422.3 956.3 418.7 913 421.3C869.7 424 826.3 433 782.8 430.3C739.3 427.7 695.7 413.3 652.2 411.5C608.7 409.7 565.3 420.3 521.8 419.3C478.3 418.3 434.7 405.7 391.2 402C347.7 398.3 304.3 403.7 260.8 401C217.3 398.3 173.7 387.7 130.2 385C86.7 382.3 43.3 387.7 21.7 390.3L0 393Z"
            fill="#031107"
          />
          <path
            d="M0 471L21.7 480.8C43.3 490.7 86.7 510.3 130.2 513.8C173.7 517.3 217.3 504.7 260.8 494.8C304.3 485 347.7 478 391.2 479.8C434.7 481.7 478.3 492.3 521.8 493.2C565.3 494 608.7 485 652.2 490.5C695.7 496 739.3 516 782.8 523.2C826.3 530.3 869.7 524.7 913 521.8C956.3 519 999.7 519 1043.2 522.7C1086.7 526.3 1130.3 533.7 1173.8 533.7C1217.3 533.7 1260.7 526.3 1304.2 525.5C1347.7 524.7 1391.3 530.3 1434.8 524.2C1478.3 518 1521.7 500 1565.2 496.3C1608.7 492.7 1652.3 503.3 1695.8 509.5C1739.3 515.7 1782.7 517.3 1826.2 511C1869.7 504.7 1913.3 490.3 1956.8 489.5C2000.3 488.7 2043.7 501.3 2087 505.8C2130.3 510.3 2173.7 506.7 2217.2 504C2260.7 501.3 2304.3 499.7 2347.8 495.2C2391.3 490.7 2434.7 483.3 2478.2 481.5C2521.7 479.7 2565.3 483.3 2608.8 490.5C2652.3 497.7 2695.7 508.3 2739.2 514.7C2782.7 521 2826.3 523 2869.8 522.2C2913.3 521.3 2956.7 517.7 2978.3 515.8L3000 514L3000 507L2978.3 499.7C2956.7 492.3 2913.3 477.7 2869.8 475.8C2826.3 474 2782.7 485 2739.2 484.2C2695.7 483.3 2652.3 470.7 2608.8 451.7C2565.3 432.7 2521.7 407.3 2478.2 404.7C2434.7 402 2391.3 422 2347.8 428.3C2304.3 434.7 2260.7 427.3 2217.2 430C2173.7 432.7 2130.3 445.3 2087 443.5C2043.7 441.7 2000.3 425.3 1956.8 428C1913.3 430.7 1869.7 452.3 1826.2 452.3C1782.7 452.3 1739.3 430.7 1695.8 420.8C1652.3 411 1608.7 413 1565.2 424.8C1521.7 436.7 1478.3 458.3 1434.8 457.3C1391.3 456.3 1347.7 432.7 1304.2 438C1260.7 443.3 1217.3 477.7 1173.8 494C1130.3 510.3 1086.7 508.7 1043.2 497.8C999.7 487 956.3 467 913 469.7C869.7 472.3 826.3 497.7 782.8 490.5C739.3 483.3 695.7 443.7 652.2 435.5C608.7 427.3 565.3 450.7 521.8 450.7C478.3 450.7 434.7 427.3 391.2 416.5C347.7 405.7 304.3 407.3 260.8 415.5C217.3 423.7 173.7 438.3 130.2 442.8C86.7 447.3 43.3 441.7 21.7 438.8L0 436Z"
            fill="#030b05"
          />
          <path
            d="M0 541L21.7 541C43.3 541 86.7 541 130.2 541C173.7 541 217.3 541 260.8 541C304.3 541 347.7 541 391.2 541C434.7 541 478.3 541 521.8 541C565.3 541 608.7 541 652.2 541C695.7 541 739.3 541 782.8 541C826.3 541 869.7 541 913 541C956.3 541 999.7 541 1043.2 541C1086.7 541 1130.3 541 1173.8 541C1217.3 541 1260.7 541 1304.2 541C1347.7 541 1391.3 541 1434.8 541C1478.3 541 1521.7 541 1565.2 541C1608.7 541 1652.3 541 1695.8 541C1739.3 541 1782.7 541 1826.2 541C1869.7 541 1913.3 541 1956.8 541C2000.3 541 2043.7 541 2087 541C2130.3 541 2173.7 541 2217.2 541C2260.7 541 2304.3 541 2347.8 541C2391.3 541 2434.7 541 2478.2 541C2521.7 541 2565.3 541 2608.8 541C2652.3 541 2695.7 541 2739.2 541C2782.7 541 2826.3 541 2869.8 541C2913.3 541 2956.7 541 2978.3 541L3000 541L3000 512L2978.3 513.8C2956.7 515.7 2913.3 519.3 2869.8 520.2C2826.3 521 2782.7 519 2739.2 512.7C2695.7 506.3 2652.3 495.7 2608.8 488.5C2565.3 481.3 2521.7 477.7 2478.2 479.5C2434.7 481.3 2391.3 488.7 2347.8 493.2C2304.3 497.7 2260.7 499.3 2217.2 502C2173.7 504.7 2130.3 508.3 2087 503.8C2043.7 499.3 2000.3 486.7 1956.8 487.5C1913.3 488.3 1869.7 502.7 1826.2 509C1782.7 515.3 1739.3 513.7 1695.8 507.5C1652.3 501.3 1608.7 490.7 1565.2 494.3C1521.7 498 1478.3 516 1434.8 522.2C1391.3 528.3 1347.7 522.7 1304.2 523.5C1260.7 524.3 1217.3 531.7 1173.8 531.7C1130.3 531.7 1086.7 524.3 1043.2 520.7C999.7 517 956.3 517 913 519.8C869.7 522.7 826.3 528.3 782.8 521.2C739.3 514 695.7 494 652.2 488.5C608.7 483 565.3 492 521.8 491.2C478.3 490.3 434.7 479.7 391.2 477.8C347.7 476 304.3 483 260.8 492.8C217.3 502.7 173.7 515.3 130.2 511.8C86.7 508.3 43.3 488.7 21.7 478.8L0 469Z"
            fill="#020202"
          />
        </svg>
      </object>
    </>
  )
}

export default DynamicBackground