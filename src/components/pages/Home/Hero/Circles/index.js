import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('HomeHeroCircles')

const HomeHeroCircles = ({className}) =>(
  <svg width="1253" className={className} height="358" viewBox="0 0 1253 358" xmlns="http://www.w3.org/2000/svg"
  >
    <defs >
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1" 
      >
        <stop stopColor="#FFFFFF" offset="0%"  />
        <stop stopColor="#000000" offset="100%"  />
      </linearGradient>
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.100000001" 
    >
      <g transform="translate(-92.000000, -380.000000)" strokeWidth="2" stroke="url(#linearGradient-1)"
          >
        <g transform="translate(93.000000, 134.000000)"  >
          <g transform="translate(0.000000, 247.000000)"  >
            <g  >
              <path className={cn()} style={{animationDelay: `0s`}} d="M625.0555,68.5953 C619.3385,68.5953 613.7005,68.7223 608.1955,68.9703 C602.6795,69.2193 597.2865,69.5903 592.0735,70.0783 C586.8405,70.5693 581.7775,71.1783 576.9435,71.9033 C572.0815,72.6323 567.4425,73.4783 563.0875,74.4393 C558.6505,75.4183 554.6295,76.4903 551.0575,77.6433 C547.4535,78.8063 544.3025,80.0523 541.6395,81.3683 C538.9505,82.6973 536.7575,84.0983 535.0995,85.5573 C533.4245,87.0323 532.2945,88.5683 531.7545,90.1483 C531.2075,91.7473 531.2825,93.3373 531.9675,94.9003 C532.6595,96.4803 533.9765,98.0313 535.9025,99.5323 C537.8485,101.0513 540.4175,102.5193 543.5905,103.9163 C546.7955,105.3263 550.6135,106.6623 555.0255,107.9023 C559.4245,109.1393 564.2795,110.2453 569.5165,111.2103 C574.7885,112.1823 580.4375,113.0093 586.3865,113.6803 C592.3615,114.3553 598.6255,114.8703 605.0975,115.2183 C611.5855,115.5673 618.2665,115.7453 625.0555,115.7453 C631.8465,115.7453 638.5265,115.5673 645.0135,115.2183 C651.4835,114.8703 657.7475,114.3553 663.7215,113.6803 C669.6685,113.0093 675.3155,112.1823 680.5875,111.2103 C685.8235,110.2453 690.6785,109.1393 695.0775,107.9023 C699.4885,106.6623 703.3065,105.3263 706.5125,103.9163 C709.6845,102.5193 712.2535,101.0513 714.2005,99.5323 C716.1265,98.0313 717.4425,96.4803 718.1355,94.9003 C718.8195,93.3373 718.8945,91.7473 718.3475,90.1483 C717.8075,88.5683 716.6785,87.0323 715.0035,85.5573 C713.3455,84.0983 711.1525,82.6973 708.4635,81.3683 C705.8005,80.0523 702.6485,78.8063 699.0455,77.6433 C695.4725,76.4903 691.4525,75.4183 687.0145,74.4393 C682.6595,73.4783 678.0205,72.6323 673.1605,71.9033 C668.3275,71.1783 663.2655,70.5693 658.0325,70.0783 C652.8205,69.5903 647.4295,69.2193 641.9145,68.9703 C636.4105,68.7223 630.7725,68.5953 625.0555,68.5953"
                    id="road-1"  />
              <path className={cn()} style={{animationDelay: `1s`}} d="M625.055,57.4323 C616.319,57.4323 607.699,57.6173 599.272,57.9803 C590.819,58.3453 582.536,58.8883 574.502,59.6053 C566.419,60.3273 558.566,61.2263 551.027,62.2973 C543.421,63.3783 536.114,64.6383 529.196,66.0723 C522.146,67.5353 515.692,69.1413 509.887,70.8743 C504,72.6303 498.77,74.5193 494.258,76.5223 C489.676,78.5573 485.827,80.7113 482.784,82.9673 C479.687,85.2613 477.42,87.6623 476.063,90.1483 C474.68,92.6813 474.286,95.2183 474.878,97.7313 C475.48,100.2893 477.104,102.8203 479.744,105.2903 C482.431,107.8043 486.166,110.2523 490.938,112.5983 C495.788,114.9833 501.701,117.2573 508.656,119.3843 C515.659,121.5293 523.494,123.4573 532.039,125.1483 C540.68,126.8573 550.018,128.3163 559.921,129.5053 C569.899,130.7033 580.414,131.6223 591.318,132.2433 C602.266,132.8663 613.564,133.1853 625.056,133.1853 C636.549,133.1853 647.846,132.8663 658.793,132.2433 C669.697,131.6223 680.209,130.7033 690.187,129.5053 C700.088,128.3163 709.425,126.8573 718.065,125.1483 C726.61,123.4573 734.444,121.5293 741.447,119.3843 C748.402,117.2573 754.315,114.9833 759.165,112.5983 C763.939,110.2523 767.675,107.8043 770.363,105.2903 C773.004,102.8203 774.629,100.2893 775.233,97.7313 C775.825,95.2183 775.431,92.6813 774.048,90.1483 C772.691,87.6623 770.423,85.2613 767.326,82.9673 C764.283,80.7113 760.432,78.5573 755.848,76.5223 C751.335,74.5193 746.104,72.6303 740.217,70.8743 C734.411,69.1413 727.956,67.5353 720.907,66.0723 C713.989,64.6383 706.682,63.3783 699.076,62.2973 C691.538,61.2263 683.686,60.3273 675.605,59.6053 C667.572,58.8883 659.289,58.3453 650.837,57.9803 C642.411,57.6173 633.792,57.4323 625.055,57.4323"
                    id="road-2"  />
              <path className={cn()} style={{animationDelay: `2s`}} d="M625.055,43.5006 C612.548,43.5006 600.201,43.7506 588.111,44.2406 C575.969,44.7326 564.034,45.4686 552.411,46.4416 C540.688,47.4236 529.235,48.6506 518.163,50.1186 C506.951,51.6046 496.084,53.3446 485.688,55.3346 C475.066,57.3696 465.213,59.6146 456.213,62.0486 C447.031,64.5326 438.71,67.2206 431.354,70.0886 C423.827,73.0226 417.292,76.1546 411.871,79.4566 C406.31,82.8436 401.911,86.4176 398.817,90.1486 C395.637,93.9846 393.935,97.8676 393.743,101.7526 C393.544,105.7446 394.941,109.7356 397.962,113.6716 C401.065,117.7146 405.876,121.6936 412.415,125.5456 C419.122,129.4966 427.63,133.3046 437.94,136.8996 C448.437,140.5606 460.445,143.8806 473.776,146.8126 C487.348,149.7986 502.222,152.3656 518.169,154.4686 C534.319,156.5986 551.475,158.2386 569.376,159.3506 C587.394,160.4696 606.052,161.0446 625.057,161.0446 C644.06,161.0446 662.716,160.4696 680.733,159.3506 C698.633,158.2386 715.79,156.5986 731.94,154.4686 C747.889,152.3656 762.763,149.7986 776.336,146.8126 C789.668,143.8806 801.676,140.5606 812.173,136.8996 C822.48,133.3046 830.987,129.4966 837.692,125.5456 C844.229,121.6936 849.039,117.7146 852.142,113.6716 C855.161,109.7356 856.558,105.7446 856.361,101.7526 C856.167,97.8676 854.466,93.9846 851.285,90.1486 C848.192,86.4176 843.792,82.8436 838.232,79.4566 C832.811,76.1546 826.276,73.0226 818.749,70.0886 C811.394,67.2206 803.075,64.5326 793.893,62.0486 C784.894,59.6146 775.042,57.3696 764.422,55.3346 C754.026,53.3446 743.159,51.6046 731.946,50.1186 C720.873,48.6506 709.419,47.4236 697.697,46.4416 C686.074,45.4686 674.138,44.7326 661.996,44.2406 C649.907,43.7506 637.56,43.5006 625.055,43.5006"
                    id="road-3"  />
              <path className={cn()} style={{animationDelay: `3s`}} d="M625.0545,28.6535 C608.5325,28.6535 592.2085,28.9615 576.1965,29.5675 C560.0925,30.1755 544.2125,31.0885 528.6805,32.2975 C512.9715,33.5205 497.5325,35.0535 482.4995,36.8955 C467.2105,38.7695 452.2565,40.9715 437.7925,43.5065 C422.9475,46.1085 408.9875,48.9955 396.0315,52.1475 C382.7185,55.3845 370.4105,58.9135 359.2595,62.7095 C347.7535,66.6255 337.4365,70.8405 328.4985,75.3245 C319.2405,79.9715 311.4315,84.9235 305.3085,90.1485 C298.9415,95.5825 294.5895,101.1475 292.3505,106.7795 C290.0215,112.6415 289.9835,118.5725 292.3475,124.4965 C294.8065,130.6575 299.8605,136.7995 307.6165,142.8205 C315.6705,149.0745 326.6145,155.1815 340.5255,161.0185 C354.8755,167.0395 371.8655,172.5655 391.2395,177.4955 C411.1595,182.5645 433.4435,186.9635 457.7325,190.5955 C482.5045,194.3005 509.1385,197.1725 537.1755,199.1285 C565.5005,201.1035 594.9755,202.1225 625.0575,202.1225 C655.1375,202.1225 684.6085,201.1035 712.9325,199.1285 C740.9675,197.1725 767.6005,194.3005 792.3725,190.5955 C816.6625,186.9635 838.9465,182.5645 858.8685,177.4955 C878.2445,172.5655 895.2355,167.0395 909.5885,161.0185 C923.4965,155.1815 934.4375,149.0745 942.4905,142.8205 C950.2455,136.7995 955.2985,130.6575 957.7565,124.4965 C960.1195,118.5725 960.0805,112.6415 957.7515,106.7795 C955.5125,101.1475 951.1605,95.5825 944.7945,90.1485 C938.6715,84.9235 930.8625,79.9715 921.6035,75.3245 C912.6665,70.8405 902.3495,66.6255 890.8445,62.7095 C879.6935,58.9135 867.3875,55.3845 854.0745,52.1475 C841.1195,48.9955 827.1615,46.1085 812.3165,43.5065 C797.8515,40.9715 782.8965,38.7695 767.6055,36.8955 C752.5725,35.0535 737.1325,33.5205 721.4245,32.2975 C705.8915,31.0885 690.0125,30.1755 673.9095,29.5675 C657.8975,28.9615 641.5755,28.6535 625.0545,28.6535"
                    id="road-4"  />
              <path className={cn()} style={{animationDelay: `4s`}} d="M625.0545,14.7482 C604.7715,14.7482 584.7195,15.1022 565.0165,15.7972 C545.1755,16.4972 525.5515,17.5482 506.2785,18.9452 C486.7355,20.3612 467.4195,22.1422 448.4835,24.2892 C429.1455,26.4812 410.0695,29.0702 391.4265,32.0652 C372.2015,35.1522 353.8945,38.5992 336.6515,42.3842 C318.8075,46.3002 302.0095,50.6002 286.4515,55.2612 C270.2615,60.1122 255.3335,65.3782 241.9305,71.0372 C227.9025,76.9592 215.4775,83.3392 204.9955,90.1482 C193.9635,97.3162 185.4025,104.7492 179.5215,112.3732 C173.3215,120.4142 170.1015,128.6652 170.1225,137.0242 C170.1445,145.8422 173.7735,154.7662 181.2935,163.6482 C189.2195,173.0112 201.4405,182.2952 218.2215,191.3062 C235.8115,200.7452 257.7345,209.5312 283.7105,217.4742 C310.7605,225.7472 341.9055,233.0132 376.6355,239.0762 C412.3925,245.3172 451.4765,250.1982 493.1225,253.5412 C535.4155,256.9362 579.7195,258.6942 625.0585,258.6942 C670.3975,258.6942 714.7015,256.9362 756.9945,253.5412 C798.6385,250.1982 837.7225,245.3172 873.4795,239.0762 C908.2085,233.0132 939.3515,225.7472 966.3995,217.4742 C992.3735,209.5312 1014.2935,200.7452 1031.8805,191.3062 C1048.6615,182.2952 1060.8835,173.0112 1068.8105,163.6482 C1076.3315,154.7662 1079.9615,145.8422 1079.9845,137.0242 C1080.0075,128.6652 1076.7895,120.4142 1070.5895,112.3732 C1064.7095,104.7492 1056.1475,97.3162 1045.1155,90.1482 C1034.6335,83.3392 1022.2085,76.9592 1008.1795,71.0372 C994.7745,65.3782 979.8465,60.1122 963.6545,55.2612 C948.0965,50.6002 931.2965,46.3002 913.4525,42.3842 C896.2085,38.5992 877.9005,35.1522 858.6765,32.0652 C840.0355,29.0702 820.9595,26.4812 801.6235,24.2892 C782.6875,22.1422 763.3725,20.3612 743.8295,18.9452 C724.5565,17.5482 704.9325,16.4972 685.0925,15.7972 C665.3895,15.1022 645.3375,14.7482 625.0545,14.7482"
                    id="road-5"  />
              <path className={cn()} style={{animationDelay: `5s`}} d="M625.054,0.0001 C600.781,0.0001 576.767,0.3921 553.131,1.1641 C529.296,1.9411 505.645,3.1101 482.319,4.6671 C458.598,6.2511 435.015,8.2491 411.729,10.6661 C387.845,13.1451 364.068,16.0861 340.579,19.5071 C316.218,23.0571 292.706,27.0441 270.216,31.4551 C246.759,36.0551 224.252,41.1461 202.935,46.7151 C180.532,52.5681 159.292,58.9891 139.552,65.9661 C118.638,73.3571 99.267,81.4221 81.896,90.1481 C63.333,99.4741 47.559,109.3001 34.953,119.5451 C21.431,130.5361 11.54,142.0201 5.797,153.8711 C-0.382,166.6191 -1.756,179.7811 2.325,193.1561 C6.72,207.5551 17.422,222.1521 35.16,236.6321 C54.177,252.1561 80.5,266.9311 114.01,280.5691 C149.616,295.0581 192.781,308.0401 242.862,319.0521 C295.242,330.5701 354.152,339.7091 418.25,346.0351 C483.92,352.5161 553.509,355.8951 625.06,355.8951 C696.607,355.8951 766.194,352.5161 831.863,346.0351 C895.959,339.7091 954.87,330.5701 1007.251,319.0521 C1057.332,308.0401 1100.499,295.0581 1136.106,280.5691 C1169.617,266.9311 1195.94,252.1561 1214.956,236.6321 C1232.694,222.1521 1243.395,207.5551 1247.787,193.1561 C1251.868,179.7811 1250.492,166.6191 1244.312,153.8711 C1238.567,142.0201 1228.674,130.5361 1215.151,119.5451 C1202.544,109.3001 1186.769,99.4741 1168.206,90.1481 C1150.835,81.4221 1131.465,73.3571 1110.552,65.9661 C1090.812,58.9891 1069.574,52.5681 1047.171,46.7151 C1025.856,41.1461 1003.349,36.0551 979.893,31.4551 C957.403,27.0441 933.892,23.0571 909.531,19.5071 C886.041,16.0861 862.264,13.1451 838.379,10.6661 C815.092,8.2491 791.508,6.2511 767.787,4.6671 C744.46,3.1101 720.81,1.9411 696.975,1.1641 C673.339,0.3921 649.326,0.0001 625.054,0.0001"
                    id="road-6"  />
            </g>
          </g>
        </g>
      </g>
    </g>
    <circle r="4" fill="#000" id="circle-1"  className={cn()} style={{animationDelay: `2s`}}>
      <animateMotion dur="6s" repeatCount="indefinite" repeatDur="indefinite" 
      >
        <mpath xlinkHref="#road-3"  />
      </animateMotion>
    </circle>
    <circle r="4" fill="#000" id="circle-2"  className={cn()} style={{animationDelay: `3s`}}>
      <animateMotion dur="2s" repeatCount="indefinite" repeatDur="indefinite" 
      >
        <mpath xlinkHref="#road-4"  />
      </animateMotion>
    </circle>
    <circle r="5" fill="#000" id="circle-3"  className={cn()} style={{animationDelay: `4s`}}>
      <animateMotion dur="3s" repeatCount="indefinite" repeatDur="indefinite" 
      >
        <mpath xlinkHref="#road-5"  />
      </animateMotion>
    </circle>
    <circle r="5" fill="#000" id="circle-3"  className={cn()} style={{animationDelay: `5s`}}>
      <animateMotion dur="5.5s" repeatCount="indefinite" repeatDur="indefinite" 
      >
        <mpath xlinkHref="#road-5"  />
      </animateMotion>
    </circle>
    <circle r="5" fill="#000" id="circle-4"  className={cn()} style={{animationDelay: `5s`}}>
      <animateMotion dur="5s" repeatCount="indefinite" repeatDur="indefinite" 
      >
        <mpath xlinkHref="#road-6"  />
      </animateMotion>
    </circle>
    <circle r="5" fill="#000" id="circle-4"  className={cn()} style={{animationDelay: `5s`}}>
      <animateMotion dur="8s" repeatCount="indefinite" repeatDur="indefinite" 
      >
        <mpath xlinkHref="#road-6"  />
      </animateMotion>
    </circle>
    <circle r="5" fill="#000" id="circle-4"  className={cn()} style={{animationDelay: `6s`}}>
      <animateMotion dur="10s" repeatCount="indefinite" repeatDur="indefinite" 
      >
        <mpath xlinkHref="#road-6"  />
      </animateMotion>
    </circle>
  </svg>)

HomeHeroCircles.propTypes = {
};

HomeHeroCircles.defaultProps = {
}
export default HomeHeroCircles