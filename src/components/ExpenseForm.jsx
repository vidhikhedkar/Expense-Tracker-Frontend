import React, { useState } from "react";
import {
  Card,
  Input,
  InputNumber,
  Button,
  DatePicker,
  Select,
  Typography,
  Divider,
  Space,
} from "antd";
import {
  DollarCircleOutlined,
  CalendarOutlined,
  FileTextOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";

const { Title, Text } = Typography;
const { TextArea } = Input;

const ExpenseForm = ({ onSubmit, expense }) => {
  const [formData, setFormData] = useState({
    title: expense?.title || "",
    amount: expense?.amount || 0,
    category: expense?.category || "",
    description: expense?.description || "",
    date: expense?.date ? dayjs(expense.date) : null,
  });

  const handleSubmit = () => {
    onSubmit({
      ...formData,
      date: formData.date
        ? formData.date.format("YYYY-MM-DD")
        : "",
    });

    setFormData({
      title: "",
      amount: 0,
      category: "",
      description: "",
      date: null,
    });
  };

  return (
    <Card
      bordered={false}
      className="rounded-3xl shadow-2xl"
      style={{
        borderRadius: 24,
      }}
    >
      <Title level={3} style={{ marginBottom: 0 }}>
        Add Expense
      </Title>

      <Text type="secondary">
        Record today's spending in a few seconds.
      </Text>

      <Divider />
      <Space
        direction="vertical"
        size="large"
        style={{ width: "100%" }}
      >
        <Input
          size="large"
          placeholder="Expense Title"
          value={formData.title}
          onChange={(e) =>
            setFormData({ ...formData, title: e.target.value })
          }
        />

        <InputNumber
          size="large"
          style={{ width: "100%" }}
          prefix="₹"
          placeholder="Amount"
          value={formData.amount}
          onChange={(value) =>
            setFormData({ ...formData, amount: value })
          }
        />

        <Select
          size="large"
          placeholder="Select Category"
          value={formData.category || undefined}
          onChange={(value) =>
            setFormData({ ...formData, category: value })
          }
          options={[
            { value: "Food", label: "🍔 Food" },
            { value: "Shopping", label: "🛍 Shopping" },
            { value: "Travel", label: "✈ Travel" },
            { value: "Bills", label: "📄 Bills" },
            { value: "Health", label: "💊 Health" },
            { value: "Entertainment", label: "🎬 Entertainment" },
            { value: "Other", label: "📦 Other" },
          ]}
        />

        <DatePicker
          size="large"
          style={{ width: "100%" }}
          placeholder="Expense Date"
          suffixIcon={<CalendarOutlined />}
          value={formData.date}
          onChange={(date) =>
            setFormData({ ...formData, date })
          }
        />

        <TextArea
          rows={4}
          placeholder="Description (Optional)"
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
        />

        <Button
          type="primary"
          size="large"
          icon={<DollarCircleOutlined />}
          block
          style={{
            height: 50,
            borderRadius: 12,
            fontWeight: 600,
          }}
          onClick={handleSubmit}
        >
          Save Expense
        </Button>
      </Space>
    </Card>
  );
};

export default ExpenseForm;