import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const content = [
  {
    title: " Tổng Quan về Dịch Vụ",
    subtitle: "HCMUT_SSPS là một hệ thống in ấn tiên tiến, được thiết kế đặc biệt cho sinh viên của HCMUT. "
  },
  {
    title: "Quy Trình In Ấn Linh Hoạt",
    subtitle: "  Sinh viên có thể in tài liệu một cách dễ dàng bằng cách tải tệp lên hệ thống, chọn máy in và thiết lập các tùy chọn in ấn như kích thước giấy, số trang, in hai mặt, số bản sao, và nhiều hơn nữa."
  },
  {
    title: "Hỗ Trợ Tài Chính và Nạp Trang In",
    subtitle: " Mỗi học kỳ, trường cung cấp cho mỗi sinh viên một số lượng trang A4 mặc định để in. Sinh viên có thể mua thêm trang in thông qua tính năng 'Mua Trang In' và thanh toán qua hệ thống BKPay của trường."
  },
  {
    title: "Bảo Mật và Xác Thực",
    subtitle: " Tất cả người dùng phải được xác thực qua dịch vụ HCMUT_SSO trước khi sử dụng hệ thống."
  },
  {
    title: "HCMUT_SSPS - Đồng hành cùng mỗi bước chân sinh viên, hỗ trợ học tập và nghiên cứu một cách hiệu quả và tiện lợi!",
    subtitle: ""
  }
];

const transitionDuration: number = 600;

const colors = ["#A0C3D2", "#EAC7C7", "#6096B4", "#F4CE14", "#6096B4", "#FF00FF"];

const About: React.FC = () => {
  const [isBusy, setIsBusy] = useState(false);
  const [slideIdx, setSlideIdx] = useState<number>(0);
  const totalSlideNumber = content.length;

  const slideDurationTimeout = (slideDuration: number) => {
    setTimeout(() => {
      setIsBusy(false);
    }, slideDuration);
  };

  const parallaxScroll = _.throttle((e: React.WheelEvent<HTMLDivElement>) => {
    const isWheelingDown = -e.deltaY <= 0;

    if (isWheelingDown && !isBusy) {
      setIsBusy(true);
      if (slideIdx !== totalSlideNumber - 1) {
        scrollDown();
      }
      slideDurationTimeout(transitionDuration);
    }

    if (!isWheelingDown && !isBusy) {
      setIsBusy(true);
      if (slideIdx !== 0) {
        scrollUp();
      }
      slideDurationTimeout(transitionDuration);
    }
  });

  const scrollDown = (): void => setSlideIdx((prevIdx) => prevIdx + 1);

  const scrollUp = (): void => setSlideIdx((prevIdx) => prevIdx - 1);

  return (
    <div className="app" onWheel={parallaxScroll}>
      {content.map((c, i) => {
        const classNames = [
          "section",
          i <= slideIdx - 1 ? "down-scroll" : "",
          i !== totalSlideNumber - 1 && i >= slideIdx ? "up-scroll" : ""
        ]
          .join(" ")
          .trim();

        return (
          <Parallax
            blur={0}
            bgImage={`/about${i + 1}.jpg`}
            bgImageAlt={c.title}
            strength={200}
          >
            <div className="h-screen">
              <section className={classNames}>
                <div className="parallax-wrapper h-screen flex flex-col justify-center items-center relative text-center uppercase">
                  <div className="content" style={{ color: colors[i % colors.length] }}>
                    <h1 className="title text-3xl font-bold mb-4">{c.title}</h1>
                    {i === content.length - 1 ? (
                      <button className="custom-btn btn-3 mt-5">
                    <span><Link to='/'>Về trang chủ</Link></span>
                  </button>                 
                      ) : (
                      <h3 className="subtitle text-2xl font-bold mb-4">{c.subtitle}</h3>
                    )}
                  </div>
                </div>
              </section>
            </div>
          </Parallax>
        );
      })}
    </div>
  );
};

export default About;
