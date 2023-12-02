import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Chào mừng bạn đến với Dịch Vụ In Ấn Thông Minh dành cho sinh viên HCMUT!
          </Typography>
          <Typography variant="h5" gutterBottom>
            Tổng Quan về Dịch Vụ
          </Typography>
          <Typography variant="body1" paragraph>
            HCMUT_SSPS là một hệ thống in ấn tiên tiến, được thiết kế đặc biệt cho sinh viên của HCMUT. Hệ thống này bao gồm nhiều máy in được đặt tại các khu vực khác nhau trên các cơ sở của trường, mỗi máy in đều có ID riêng, tên thương hiệu, mô hình máy, mô tả ngắn gọn và thông tin vị trí cụ thể.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Quy Trình In Ấn Linh Hoạt
          </Typography>
          <Typography variant="body1" paragraph>
            Sinh viên có thể in tài liệu một cách dễ dàng bằng cách tải tệp lên hệ thống, chọn máy in và thiết lập các tùy chọn in ấn như kích thước giấy, số trang, in hai mặt, số bản sao, và nhiều hơn nữa. Hệ thống chỉ chấp nhận các loại tệp tin được quy định bởi SPSO.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Theo Dõi và Quản Lý Hiệu Quả
          </Typography>
          <Typography variant="body1" paragraph>
            Mọi hoạt động in ấn của sinh viên đều được ghi lại chi tiết, bao gồm ID sinh viên, ID máy in, tên tệp, thời gian bắt đầu và kết thúc in, và số lượng trang theo từng kích cỡ giấy. SPSO có thể xem lịch sử in ấn của tất cả hoặc từng sinh viên trong một khoảng thời gian nhất định, và sinh viên cũng có thể xem nhật ký in ấn của mình.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Hỗ Trợ Tài Chính và Nạp Trang In
          </Typography>
          <Typography variant="body1" paragraph>
            Mỗi học kỳ, trường cung cấp cho mỗi sinh viên một số lượng trang A4 mặc định để in. Sinh viên có thể mua thêm trang in thông qua tính năng "Mua Trang In" và thanh toán qua hệ thống BKPay của trường. Hệ thống chỉ cho phép in khi số trang không vượt quá số dư trong tài khoản của sinh viên.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Quản Lý và Báo Cáo
          </Typography>
          <Typography variant="body1" paragraph>
            SPSO có các chức năng quản lý máy in và cấu hình hệ thống, bao gồm thay đổi số trang mặc định và các loại tệp tin được chấp nhận. Báo cáo sử dụng hệ thống được tạo tự động hàng tháng và hàng năm, giúp SPSO theo dõi và quản lý hiệu quả.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Bảo Mật và Xác Thực
          </Typography>
          <Typography variant="body1" paragraph>
            Tất cả người dùng phải được xác thực qua dịch vụ HCMUT_SSO trước khi sử dụng hệ thống.
          </Typography>
          <Typography variant="h5" gutterBottom>
            HCMUT_SSPS - Đồng hành cùng mỗi bước chân sinh viên, hỗ trợ học tập và nghiên cứu một cách hiệu quả và tiện lợi!
          </Typography>
        </Paper>
        <div tabIndex={0} className='fixed bottom-5 right-10 z-[1] w-30 text-lg'>
          <Link to={'/'}>Quay về trang chủ</Link>
        </div>
      </Box>
    </Container>
  );
};

export default About;
