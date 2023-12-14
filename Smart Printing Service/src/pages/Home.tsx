import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Section = styled.div`
  height: 80vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 170vh;
  }
`;

const Container = styled.div`
  height: 80%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 40px;

  @media only screen and (max-width: 768px) {
    font-size: 25px;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #5FBDFF;
`;

const Desc = styled.p`
  font-size: 20px;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    font-size: 15px;
    text-align: center;
  }
`;


const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;




const Home: React.FC = () => {
  const { user } = useAuth();


  return (
    <>
    {!user ? (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Dịch Vụ In Ấn Thông Minh Cho Sinh Viên HCMUT (HCMUT_SSPS)</Title>
          <WhatWeDo>
            <Line src="/line.png" />
            <Subtitle>Tiện ích in ấn hiện đại và tiết kiệm cho sinh viên</Subtitle>
          </WhatWeDo>
          <Desc>
          Hệ thống HCMUT_SSPS cung cấp giải pháp in ấn tiện lợi cho sinh viên với 
            các chức năng: tải tài liệu, chọn máy in, cấu hình in ấn, quản lý lịch sử in ấn,
            và mua thêm trang in qua hệ thống BKPay. Đảm bảo an toàn và tiện dụng 
            với xác thực qua dịch vụ HCMUT_SSO.          </Desc>
          <Link to="/login" className="btn bg-[#1E90FF] text-white text-lg w-28">Bắt đầu</Link>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#5FBDFF"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="/home-removebg-preview.png" />
        </Right>
      </Container>
    </Section>
 
    ) : (
      <> 
      <Navbar/>
<div className="hero flex-grow bg-cover  bg-center overflow-hidden" style={{backgroundImage: 'url(https://e-learning.hcmut.edu.vn/theme/boost/images/slbktv.jpg?1700134354263)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
</div>
</div>
</>
    )
    }
    </>
    );
};

export default Home;