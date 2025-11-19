import { motion } from 'framer-motion';
import { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import TextArea from 'antd/es/input/TextArea';

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      message.success('Thank you! We will contact you soon.');
      form.resetFields();
      setLoading(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+91-9347644772 / +91-8332993388',
      color: 'from-[#fa171a] to-[#fa171a]',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@tirumalaearthing.com',
      color: 'from-[#fa171a] to-[#fa171a]',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '11-10-37, Ammisetty Vari St, Islampet, Vijayawada, Andhra Pradesh 520001',
      color: 'from-[#fa171a] to-[#fa171a]',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <style>{`
        .ant-input:focus,
        .ant-input-focused,
        .ant-input-affix-wrapper:focus,
        .ant-input-affix-wrapper-focused {
          border-color: #fa171a !important;
          box-shadow: 0 0 0 2px rgba(250, 23, 26, 0.2) !important;
        }
        .ant-input:hover,
        .ant-input-affix-wrapper:hover {
          border-color: #fa171a !important;
        }
        .ant-input-affix-wrapper-focused .ant-input {
          border-color: transparent !important;
        }
      `}</style>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-[#fa171a]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[#fa171a] mx-auto mb-4" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#fa171a] mb-6">
                Send us a Message
              </h3>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                size="large"
              >
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: 'Please enter your name' }]}
                >
                  <Input placeholder="Your Name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email' },
                  ]}
                >
                  <Input placeholder="Your Email" />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[{ required: true, message: 'Please enter your phone number' }]}
                >
                  <Input placeholder="Your Phone Number" />
                </Form.Item>
                <Form.Item
                  name="subject"
                  rules={[{ required: true, message: 'Please enter a subject' }]}
                >
                  <Input placeholder="Subject" />
                </Form.Item>
                <Form.Item
                  name="message"
                  rules={[{ required: true, message: 'Please enter your message' }]}
                >
                  <TextArea rows={5} placeholder="Your Message" />
                </Form.Item>
                <Form.Item>
                  <Button
                    htmlType="submit"
                    loading={loading}
                    className="w-full h-12 !bg-[#fa171a] !text-white !rounded-lg !font-semibold hover:!bg-[#fa171a]/90 !text-sm !md:text-base !border-none"
                    icon={<Send className="w-4 h-4" />}
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <info.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

